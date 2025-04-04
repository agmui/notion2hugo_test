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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7S256K5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdYgWAHtHU4pGLiPlhJU5UgvAx9x6d2GAFXK8wo73HpAiAOUW6ZD9Rv8bZW%2BTSsAbykjjCmeV83zG3Q%2FL1MMJPP6ir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMCHm2O4Ve4j2xeT0zKtwDKI16UmJ%2Bqv3joo0RGqevQCyMrOoEQqlxB8iHUCI%2BhO5lpttEmmQfpAEARSPLX%2Baf0%2B9dcXurDiHxXS2hI53uUo1AHW%2FgR%2B6Sphk%2FL3AqoxZkV2X6fEASTp6wTUExqnmNz4vCZXlQKx%2Fdm4lyqiHaB0jvVq12xXUvxZo5LC9RQKt6d11ZQ3qR2RqO%2BWfLbQntsrUsXBP4tXCKaRIzkTvT6CBLiP6ywcSEUNDF1V7lk9Rz1imaAmxUZr7DqUkqwB2uUVhE%2FcArEFQJ%2F2soVnGstbX2PMWgfvmbkkz08EA0L3TpuJTFIuImiOe%2BxGmxzBERMLmykuoLLMiLNUNTI8yhRWZkXMWe00L2lD283AHxJ4AVxRJrxaQxvlx6DNHoj598V96d8A1v%2FCc1jqBtlsHEIf6DrrNPYVZ1RJqOgP8wZtNwtfEplilXlDn4lvJD1ZeDjJMCnTYvI9dLzISLsLwZAMeK2tFERQJfd9AidbGn1o0tOxfwjfpy%2BfJWaZfotPiM%2F7Q5XKU6KLfLvGxXXDgI%2Ft7FL%2Fcft9gQF8QkYPNd7zyx7FXFksNmI3hs%2F5IZlShWTFZGqwj4iGNAQvRUjEd%2Fq1DBry2JNkLIRVj8B5PXc1clqIA%2FS%2FgRbOgkJqAw%2Bcy%2FvwY6pgFdALzuAgWt7wsk6YyIw0onXsd5BWCcBHc63dt3y4SYfi%2FQ3LmTHwNUb8pnQPjJRsWI8OUoalSz%2BxZ1%2FHhmHk4eLMqHEh8HMh47SMBAFpevoB2PjA67OgawThQ%2FbbSf%2FlcXWvjyLG%2FttohccBpyym%2Fv0UsPBsRQq%2F7ApQRkWP%2BRZadJk4J%2FnrBRvKB7AARGt0reAC1OCeeDyb8qjd14zvWqn5XvWwoG&X-Amz-Signature=3c36992cc25db8a1216ea5ba4cd0950b2776cbcf6628e4fb76c5eba993ea65ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
