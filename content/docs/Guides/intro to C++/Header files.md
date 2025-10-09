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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSSNKPE%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIBOjpvnzTeKCk2LSdZolyOTXCtjHHpTJSJxc%2F%2FymhmvZAiEA3N8obggdxB3IluUEIz9%2FLcudtjcIXQ4LANTgTS8BG4oqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIL9hiBIpS%2F%2Fr7QvjyrcA3671zoditbYER1rH0NjTF3Ju6VzQep%2F%2Bjrk8JRbzfeGNTjp6OAIui34pzfwxKVt%2B7dy6GQzXW777abax9M6ejz5iWtByNlQ%2FatWic7qlIPwh8QbvGDWwhcRYHMaYK6nTrkEbtwVcz1OM5zRD82vJJYLtn5cl33NUkf187D5QPHL6J5QbVoFc4cUxNw5ilApBZH5M0YzKOeDybU4ugOl4FnLItrURZ%2Bi116ukPaX1vAswjZk37HOQLnwG4Hv11qZMpceNt%2BbKE%2FM57DhHgvSEPJ%2Fsd1nlmmOF5hu3d%2FbZ3jv%2BGfhb7iVqNhdGMKFrLM4kvR5oZrjP%2F%2BcdKef%2FEMg2WFsUvKnwWcfk24OsSJZu9EmyOEQI7OdcWaDCyB4Z2g7%2F7cqiEJjeOH%2Fw6gsHwoRqDUvos4OiaLcjhYv5ZMsDFHW2jqj4Vm%2BnDybPfh9ZwO8G7om8dyQfEmyYo7SL9TfoPWCPd8KfoZA9r8PtJ2GCL2sm%2BTqds1%2FOv%2B5kpLW8nITwQbFNrzAekh0umXcwzIJpqxJLBy6u6eJUxY6jK51xmL4pZrh%2FKtaPbX2czcuVi3q654yau%2FHIktHWkLsvcyvXZd3zzhYP1%2BIG9Rf2fd6XVCYXMAOxi7d1RbPQe7AMJf6m8cGOqUBJIY03zt3O1m%2BbOcIR2cDUAuc9syz8AJ4cmVSQos%2BaMgnlBR6slxBq%2FLKNp3g9PF746MqnYVWtCSDloxoLVa8Y5%2FSDvXxhR65R9bKa6cay2DaS7VXwnJMKu9jnS7ZnD6h1ppHErwCdHDg%2FI8PK%2FidkIxStzTYXD2XJn6FkjvVrZ8f3BrLVT456xGS%2FobIDIhJqpmK%2FoqkoyxFhE3VdNZapHp2tyCt&X-Amz-Signature=50b8e484e11a8171c8dfbf942e8aa8fd71999eda4a586a1b5da9617795653990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
