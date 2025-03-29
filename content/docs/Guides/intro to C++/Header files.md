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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBDPZOV2%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDaag2C5vtX4PUoEcqVGeitubcY0hu0zcmAdp2qwO12aQIhAPYt8Zt7Fv%2B2wlbX5rKHP7AxMKvhnZj9m83ZR%2B0M%2F4a9Kv8DCHgQABoMNjM3NDIzMTgzODA1Igxrn4c3MlN8MvrCRrUq3AMpIQmB57W6Ydga7LHRlHJG3Ny8AwgktvreSI60i%2FmfVYgcZqVz9ZKMFSp7LOhYnRGB1SjM%2B4gqFVqHFE%2BllJHLAo8V7kjr719rJpD9ukp1iywpemswBKaeMXxyYjFqPL6z62pTm65MtLVkHSbwJZTdcF3kmgQSaF8uHUJvFS5CGBt%2FRGLLmeFJZJXOwt%2BALFX0fT0Exaf2OlYiMGwypi9OSJkHxEmi6U4nhHpYKer4969%2Be28SzMWScg%2BSFyhU8zWkJKRB6AR0T0MNg7pFtw2qwr9RZYS7kHD4ATU0DzjvyA3m6bIHakCkY6UUG%2FKkijSM5ufKqDmFi5onymOZyzUOThNIx8kmh9xJTbcDhgtq07%2BSwGkMIn5Lj7djIP9F14xW4xK00YmJmlB17%2BE0GH0lqKzNBrJBkNYzO1Mkf9fhfFLsy2hIKMGsD1kGQsy1FHVnCpj7LyRoXKY0RGpZekqVOprRI9JtMv4S9rF4DsnMNnQE66p7Bo6R%2BgkkDV7UXn9BXAt%2F19uOw6WMljPKBv23jGu1ucG%2BmjILR%2Ft3Sy9LCbKz%2BYUkvsntG%2Flva%2BTKI%2FJYEKEkr5WcH6HxbN9FDkfk8AZM4lr5DscGjMMnwRsyfTXZtk0sWqm%2BApMHYDCioKC%2FBjqkAc%2B%2FRgJaIRDd8ico4UwXORepeiJX9KL3GkA5gk1YRTFt3ly7DtQyG14qL2h7LAx9OKh3SWquKjzMpjW2ydgMlN7jwMrl78TuJAoPFW5gA%2FzPO7Hfl7Hld1qxno9zfltTxsdvcQcNoYzib47Sy7x9IMGeWvKj6V8WqBu0%2FUr17s7VMEbyxxv5LB3r5oJNIDTew8e7SvWSKg3XUxj0PQGX3O3mvS2t&X-Amz-Signature=6b1763b6fcf1ec134b7335a806e243303dd7b021856b94a1483479768bbc4a23&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
