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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWRAAK4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM6CciBEqNt96591tF7CEu6b%2BP3XsR6NPU5CejaqU%2FRgIhAKp3JA3UOqWjVn6g9DMCxOqBfsIUNTXj53hNm7sEBelvKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxowbh%2BClXfm66AAJkq3AMqV%2Fncf%2BXI3Bp6cL8Zb7a71Ko%2F5GL%2BSQI4VtDERpxTdvqyRJ60zztyHotZ1jm2A1Xa5aexxahJQsW%2Fhhy%2Bk%2BUl6E4LwKPSrSYC9D3FvIU0HMAB3YPHVVUNukkcK1b0svdmO%2F9xA%2BAqwyL7tHKKhquP58ry9hgeJ16dv0VcV%2F%2FPFM3b%2FkWHFD6nEI9YmwWxzFEZqd%2FIQJEmRVIJePgq1P4GAexRVQRTB%2FgcXlPkh7jT9TfMEVnD%2B7PjCMev8Ptr5q0kMldxkhTM6pwhO95Qh1XeBdDOWGDmkfdgOzFqCR7qcugCmhZb38JjG4f1%2FfrkYQEgi34UNgZTX4F8125eFoZmBUJFzlnCv1hGDMwADsmmAEU7zimBXwlak769rQvu5FSzXeT2aR%2F9LWHktvEsaZ9AyMoUkjQB62tKbSCZY1P6DBiCQJRmnjvYUMnyTnEcKYnwASGzdhGSl1ivQ1P64Jp4515uiWdS3bZQUmm0aYeI1WoLu7v41yrGZldC3q2Dr%2Bz2XoatQyF3YKlRkcJd24kpDt4LdeeRgUbKrtBqgivB%2BBEaVA9bAquqavnPH%2FM4co3BFEr55RLp8e9MF1OWklIgpK14F6Yi6gZmmjHY%2FKOMGqPgmAju2musyls5pDDJ%2B6fJBjqkAcebQnUWeEHKDzQjRsVoYftCMBWVXESUWHH37xnNx8J90Uvt2WMchp9iYZ0h%2FnYocUGjXKSYUXvfTqy%2FKDCYKmiwY%2FTdElv8ju4x0F200u2qgodeQa1bVxYtGZmzkPbilYrpjcd7Y%2Bh7GplEn6Q%2FN9rfa2lI98RcPqwpPI4VdIVgIV1ym4EnB5CWAgHg9dSN0zhLPxXfYPB%2BfIejaKfFCIwxeXVm&X-Amz-Signature=09a17be4c418bcd471dff443bd842fa96d84071c42c39c312e246fdb4933d9ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
