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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYXSS3R%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSovRgFjrBCzCxful9%2BRsJTt47S9JtwvQdX1xxcO34qgIhAMCVUO9YYZ4w%2BgTgROkpofpDxEE2shNf0MMS2XSCeN4nKv8DCE4QABoMNjM3NDIzMTgzODA1Igw2jWmCKlp%2BZz7JEJIq3AOwANT3hk6Ls3DztxXRycnVyJ5Y4%2BBdvRS1UtL9ct8lQmvPCqbEoqGEOu5Yd8L8QfWCLC0faUrDnVy1fbS5lGrc1BrHDhtXzLbB3RAinZ4eV6XgtLHj%2B0L5Be0GqJ5cIUpPcI4lp%2B15EcYzagv1SIQqTjUszvmtqCZIzV608Ogo8sjrb%2F3iU6pjL4NbFTffzlGTxejO5ueboEKulXlocSZXj%2FW7V4%2F%2B9EirpYxEuJBg8Z3%2B5%2BkC%2FezIdoE582jpu7w%2FSYZFwvEufWvgthIMDh4mcDn8fEz5CMh%2BPnRTiapvSaPDW50YWTsjLNlarcS1AwDaL8%2Bhick6JU3F4vRVwb%2FOttHYMOrnGxUg380aDHcF8w06QN5Due90rOQDkv1fmm1ncyRhiXxpuMXaMPVKyNhHN9q%2BwKF%2BnQLwR8qwN6TJWcqrkgyiJBpwBGnUNqtOdXIQLLLF%2BuMTwa9%2FBm0oMQIDJEeiiO%2FOpOHQExcn15rGCeIl9UW0KL26YvXfHKhiOvJv03V7O3Q5%2BNvK5rroNorS3PttNyXVvsD0M1y81pbI8XBULTmKbxnMG9tPQpSIa3Qs7YHCQUtEGKsS4tpaWuQZ3kGq62g5KHt2DZn0Qs1qOjKmvfRcU%2B242jix9jCJrYDABjqkAa7YbhXbfLdbUVuQfo%2BeA5qlAv1Ipr7e6fTdtwQo7D5jNsrqt7uFDpPvUQJIFcGO7K6U8ZsUp4O5bgaCH%2B2h8c9MGtMLj17PUBNccYTzVMM4N3uE2TwDtYA%2BV0GIbmBYQyBVe1RKsVyKyJrdcaW4SXl4Z2jFApZlhbHRjhKmcZp8yGtRsPT%2FFKlKBKqhto0dYpf4Q1%2FxPvoOrHT6fIX1mGtYB8Cb&X-Amz-Signature=8d77d86a75f57127b8654ad95631540bc6af314c7b6cf8b4ea0cb81eac0f99aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
