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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L6LQPKD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICeQKgl4CHq6SPRN7hxz%2Fiy3TNSoaT3sN9Uq%2Bm%2F%2BFyVlAiAj3NxGeg%2Be%2F82Wj8Hh%2Bi8B7uRDRS5tKMOc%2BEjTjGAV%2BSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC0vCV32s%2FW5cBu0iKtwDd6%2Fv6sFZAfbk24JK0gbBN19kO5QSy7Nsts7LF3K2XmHZD0Qmwe%2Bp4ZDjQYu%2F4k4Lf05uVJ%2Fz8c5Bq%2Bu1VhP9zgkPyiVqTKd3J5huP0l75fUH3xZkKhnYv8uGrvbamCzGVbvhrehqEW6c%2Fa7vhYuC9gKVsLjclr7zADuhj2K09OjwYm3vZvsbyxi1oH3bvSYsWpqy1eObto9g9KRAiYVQ4lw5KVzf83srmm5%2FOBqwn9H%2FaJI1E9v4FVfShQSOhtGojJ0skxYKI7RVtsn5v3eTdsTPPjUCpXcYM6khBDDMBv9gIuxvUwKMuEFJR6KZjasFk9FyE0Gv2YEJhPL%2B23774yr%2FHIQU05cPn4KSXgrq7v1eOZPfI3%2F0FpZjkIw4wrhQ6FZShvV7I7jMefrjwpB8oBVG8UojLnTo7LINxy5GqkldX4cSsgJ3XxI8wC3vHdYvMVoqmr8tMhyOHuCjTz9%2BpkfxqT6bDKGOKtpg64grqMaAjs%2FCp%2B3hJ6nByjOiEA4lJVYAv%2F5HmT4H4STn5KaHsQlcSg9ULaJ%2FGRX%2FVD8IQd53fPwUxisv%2B5Joat%2FnotJSrFUfGs8oQmdZ8zCOIVnE%2FJIHlqGG1cCNM7X%2F%2FyUZKCtL59BZMoWtmcLlvyEw2%2B%2BjvwY6pgGl9huVi7qRAbwaaYVOQRE4ZOE8RZf%2FPhd6EGe0AHB4q7tfynCPUSkq%2BViz1ZtKobCetxT5pEZrz%2Fb8K1DxkWEeQshCGOik%2FtndIvBeyiCbDhFYgiScAajcqYIxZIDQu7F7bTJwmAQwmSyWUX8SSqpx8JB9x8cJPaPafISr9xuSFQwKG9EID2PoLGFxxI2P1L1VjcYjxt5nnfCF3PrH%2FXkmr6hxqFb9&X-Amz-Signature=543def86223416c27464ffce1d02695f29e0bd05dff5bc98b0bb9418cc6cc7a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
