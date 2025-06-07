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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRKDSBGP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T140726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY58wq8YxV9xWclLf0m2uV%2BoaQSrJk7hY8OIUp7SWogAIhAO5B1s9NHcWuMJRkLpwpANZvgaVvMCsQH9FkTm7BNx9MKv8DCHcQABoMNjM3NDIzMTgzODA1Igya%2FPeDFOjyCeNUKc4q3AOBJMev26z26Ktfzt7CiAonnvquOcGTdxSn4602tQZfxD9vqjymlMQgCJCJX8rhr8%2BJdSeisV8YGSifSzCHS4trknEh3i8XcLAWa%2FKjVZHbDCcH7%2FhvvdVgP0jMBsnS9W03La27ljcO68EN9lO%2FkNmtLQ8xhjnjFC6bs7y8ptf5W4VYqsXs%2BB%2F3y0p8mRSffBTRb67BlVkuNkrjZ%2BMeQpEDWokLFG2SXjyWYEQ6lN8ywgkshk3DH5E8Xjqw3w%2BHQuhO4V2ENWdFFrrJ65cX%2F7Ys3ffbrCtYDVzfvBeB8tCrcy2KjtaluF2RwJxO6XYMdrV1DG6PjPsYQPiHFrQMsiLs8NkW5mEKdHxpCFr%2FzKEuIMMxsIj9kfutROm6nHCv8H9pCKI7GOjXbhK51w5ueu3WAnoKqi4UDP%2BWMwo6%2BWmvvU23H3GJC5NsLkvd10B4bdFdOmFHf2BKwQ95vjntVeT6cyA4lPXNL1nn6yvt70VhJsgTsQF8YyzU7RTvLbjljpeX6XsfkTn8N%2BZlAIwuzpBvRXu1QwTD0ZSB9Pi2%2BFY1hZXam5WFq7B3YuIbCR65AxcyT14aN9aguneCoGiJyCr8xHSER3N9Teyir%2F72OgZwwLHXYVXcCizvjWq96zCDgZHCBjqkAXakl0gUIcet92Gl0Vpa%2B43S4%2BGDKn%2BzbbocU6D%2Btjtw4DaFqyGwEgY0kUYDDH%2BvD3fa7d2rkH%2FmfDX618OPyFT6cMLauhMDEL9PMXaPyX8h13PbCCp85rvWqDETect5zE51BUSCtHD%2BpkpbucYJpbqSz8co7KKXCUlUyII5mOiTxoQzirvdZs%2Bnh%2BpcNAc7GJJTC8dSXJE4UPAwBLXZvDtcm7G5&X-Amz-Signature=84dcfd6dd44e756edaf59b7c0c4eb226fa3db80bb34622fd3b09f498bfc38113&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
