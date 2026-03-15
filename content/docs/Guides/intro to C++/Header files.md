---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

</details>



`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PR4G5EW%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1WGN7xsQ85MCuVSIMjY1xIr%2BMWlMApE4%2BF7ZYMeeQewIgJ%2Fo0H%2FG44Cggs%2BUAlXXu%2FPlVSBPbWqLEnKVuvAa07RQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpl2FRHr68klWreiCrcA4TxNBcaqx2%2FZs3AC2DLstLgQcWKE4gTurCTC5MPWYmMShNaIAx3RFuY0qp6lgy5ATqNM4pDqJyi6DG3aOzcSUvpwAHaPapPLTJPhGf5CyMtYAJ5yLzHjM3iP9Xzvh0TLwSECfSJ0tHwzhZ8Ku07V7Htcvl6Qv%2BNNAnHGNej88dEAi4G%2FWzcsczc0vEkN4tuu9brXCdxlIJ0QczKAtF8eoEQTnh52QOjSNSOgDoEYLVwQBU3bOffu1GZbph7t5Ht0KbR8TNsF8wqMNhhYBrcaJYsuJib6Yl9z6E2JK39cSxLuQnNS6liA0yBA5QlxfhQfKyUggSxxHisrgoaLSXiSrWgTc3AH7%2BgBhM2yAf8r7H3f3MczaqfqsWgpXWrffDa2Htx4I4p91kK%2BPw9nx3UtNhHnceRSQUGB8SvSLMqXHaEm%2BwU6WmKsL6kKTNSbuzd%2FIINhXbWQA%2BmtUzKbfIxO3KsqAet94zL%2FCPuXrGTyu1CngMcyR7McQKTKrdQ6tvsdbeFcUsLLJQVmNLTCnAj0H9Wg%2F4kJBs5vq56MuLx0cQ6dbzPglLy5h1VjBEIz5J3QV1QExThsSVdY%2BXoOE8mZ4pf9rZ2i0Bc%2Fj7B%2BVCn9JBEN%2FFK8wmdIUdhqEcAMNSQ2M0GOqUBVNshen7e%2B6P2HAIvteU4CIRsiARofApXKkYocUAtw9vijFjxcQ3NHD8N1M3nHJ5lJI6Rw%2Bj8qNrjcfqh7Zpkx28KdEQwgg3rQBAnMq3bXHreHWGpdJrLLgrBjj5xnSL6moYf%2BvrsXNnU3OIVMU8zJGC%2BY7higFpb6KZ9ZnYuh87Zgwg0t0cFmMVYbsw0aq4c1ffZAMUJfDlaqvVINWcf3IXyKCnZ&X-Amz-Signature=6bb62342a4f88ed9228c349b2bc1d047a1db997fa002b989eddff0e0ea5f3c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
