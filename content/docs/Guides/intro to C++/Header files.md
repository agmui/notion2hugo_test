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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQFGT6Q%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFqO5FVIGo1Q%2BQZC2RpJQ%2FIeWOXdhPtmUVGIQz8F3NUJAiEAxhK9kpybHB8pevXl7gfYhTXDwkV%2FcuBBFPjPx%2FgxFMAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDB%2F1gXikSvCz2QKCRyrcAwJ166DbsoYRzpwDDwb2yEI8E2a0ZrTwLUjbsczQPay9q1qfeCfAfeSLl5XLbEncWtoaA9qEjJ0McaetwVsGgjYLd5Xo66EhMvOELhaJEiM%2BHKXiYNoOKgI046WaMnUyHiKvtxoNiQOd%2BFgehxGIUP2mdI7l9vL27zEOTgzCuCxaPHPdN9QRpjAZ1EcQnjpqgHWPEniswti64farLum319cb98gFeOsBpBFqBTC54OaftOGDJUJsQm2AMMncWgQEA%2BNQ20vpv1G5%2FGz826zpGrrku%2F78cb3%2FKxgxWvSYRfQ4ZfTQEr9dcoQwy84rDNLw1kHCP8RrR3qdoz15%2B17fXyg%2Btuo2V6hnyHNnNYaduoeMOwAt96GIMLu0Z3YPqgyy%2B9hVVGqkvbOCQD9QLpHFW7W8ys4Ev8dS0xDLkTsAmzJDZ7kgdUHhB6SbQT4waUXdmLbLhtrTqp8WsW4RJh7%2BKemKoCrfjWAT4BCMABA5fymwX6WFPMawEE1NFztW7NIFmr4DeTM1zxnYY%2BCBnHbisAuR0q8lqY%2FbL7OGSoaKIgGsDwrwh0Q%2FP4%2Fr%2BSJJgVDy39O1UNGYk1eFXGTn1mOAXkVFdFF%2BTj5A7YjSZ3aoekZQq%2BMgJsURKNFiLPomMLf%2FoMsGOqUB26WBjNVgDhxXeIgqcveV4gF4oizZLQrOZsiHdULrZ1RwkRy2hBOvapE7v27AXQP7PuJmt%2FLdUBeg9bvxaBYXwT%2BgYX8IUIHOCtsC6hhQyQCr2IRBLLzGqjKSRA0Cb%2FQUeiKjg43FYb906AWdiiTMCvlkYj4gXF%2BSzT3UXXjAq2FYPleFTSFzuUDsIX4GB8Y6Ossj3vBhCvf4Bep5t5%2FY8HJwnj%2FZ&X-Amz-Signature=07363ecf4f1f5e63168184001c2c950a388672ff0496b1a1324ad4a9ff063ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
