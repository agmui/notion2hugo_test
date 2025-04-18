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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4UURMN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJQlDKS49XoMEHdZi6h%2F0LxzlpgKTQrF6KO1GfT7xXSwIhAOs5jBpaT59p4DAWteAkSjrICcGWzu0vPs4JvhzRodi7Kv8DCHYQABoMNjM3NDIzMTgzODA1Igz%2BwiT4FztPc1KKfI4q3APVjp9wZqTSJNRvS62o0evEjAJiKDv3crCA2rJxfUrwabLKqM%2BID2WgFhNIVvF7OwpOY2RlYlQopT3BiyzpHPq1QzVIAMjcWZaqweqZz6ofjh7I9VPvP5frOUIzR2lHQsaf5Cpaa%2FB0CNwnuWtGABrmF4mR9Q4xpmm9oefh%2Fcvq5hpkE3ZD%2BUMuu0ZF4K%2FYkXJvfcJCggJLlwz8f5N5WunYdX9zYV0ocoWd5eCl098jvPEi2nmNMpf8UWMs9GKN40dZ3yQZpVKNgdOV6W8IEvrfitEYy6gs9TeruPlFlGQ3PPltVRqA2%2FWT3BoeNxCf1l0b8BKaTGCkuvCDAzD5GZ4ERwD4GYIlJ1qg0j%2BaddU0bMVZsBXzYTIyYH3dQ6M6qmhZvQsVizXpxzye1HI%2FqgkO%2BXO%2FatrqSMFB7dIM%2BkXwWK%2Fj%2F2bjCWk9ZD2%2BUI94R9OOwHqIj8OiVq4tZA%2FbOaS3wCo76eKUS%2BHT%2FRVAsQ1FFZ4Gm4LIzWF7lVIzudI43hLMh4UkabLbvEHyGnN58TsoBwz9oKjdsUNKiH%2B3LjEbpgJ16tXruqtyoQDoubIlYibyi1anrcMDqmsMDzbME8uSMwxK38qW7wRNswIDTB5DUgMQxf86KEtLK%2BRyczDrjYnABjqkAaQw14cxr4nDoIxjHdh3XR3j7V7DxSgcNvedA5u9WwmGsqtyxTvN6gSthrPdsQb%2BOJHobGDf7BN%2BNL1aNMojxaHUHq%2BwyMbHs%2FjmEhg0wZSx7XJPo%2B8Ve%2F4WZ7zYkiRw3a38p47oU7a8MUYAhERe%2FhCQhH%2Fjqg33SH9wruC0pvyrBv%2FRd%2F%2FXyfyYAX3kPb0YkaoVy92h%2BiMYdXH09B6noUERcjHx&X-Amz-Signature=e35c3d4410521d8421d96723ba26546a0edb44dd0a1ad23c916440229a41ed8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
