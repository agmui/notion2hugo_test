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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEBFN4DY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDR4usd%2F6XPEr33ke6teSIUbeFboL%2BvcDkaQGy%2BMDf8EgIhAJn8PzdHUwTX4yiHvrxEZYcSACLubHDFKEzSNfBHc6aRKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF66bArye9k0BCOg4q3AOdMAOiFnrlNYb9EkGFXwTtjooE%2BrdhdE%2FXnz20s8nxJ46L9tSrZZYLt%2Ftr9wmLIvOl%2B3Vd4LmvWH7QA8fvipllN4Wc8jIef04Nsd4cA4Qt%2Bm7D1TaIoYUr1%2BhI%2Bp39q5IUmMgtUl5iRFtRtfac2AfMoUYmwKjs4A8sKvCcoJ2MfA%2BZzbSziyjVk3lL4rEqfPdhVpDMMa9SsYX4QlXUSnBE3U8t0GlAqR1FDdfqPYZPcXCZ9qxbggW0Mo0P1r7H7yMvvv0%2FDm%2Bz59wEYfzkq5xQ7sJa602qOp5Cn9Mye8T2H76J4Zlw3yleyJq%2FdtUlhsSb%2BMm2fQGabZ0PEYLrfzrTBPqbLCCi1cjxPSsYyRVjt1mL2NTF00jax40D8dOYKn2AFfxy85grcogbZ5bTgXCJHFiIBn%2BL4HFGe6IfYmAn5lxSf1XG6DUoBDLMPyBYr7vvcmpxz0kbFXWeynGFAwGhuJIqIkRkZjqYqjfhTp%2BlIHzAZEP4atvey4o4hvfQevlUKZUBZG%2FS9nGkkAjMXK6zKTYpGO%2FoboKqxkAFEaj6YH7jTJVONzJscgI8kLaQorf7SHGFF0Dqo%2BvhEKeUUX8ZK%2FqoRzOJA5%2FJXqJNEwr3A%2F7VgcOQU2lS6lGKVDDe5dm%2FBjqkAc2nshsLxao8K4gUZ7AYgo6Uqr0vpUqi7bu%2Ft6M4OlvP5NnChrbb4y5gqHbAaNglQuTmbXMuZ8y5%2FJlf76xYikRodTnvyAv98n2qVi6DVIrzD%2F4feSzTKev3a4X8B93XHqHvYn0tHDUGXfrCiQ%2Bz8OIye7bdZ%2BXL%2FDXE2b82Jr0mXbKAfZZNOdgYaqNs30JkSr5NkDRHohr5ubylRWnNyv%2FgKCEq&X-Amz-Signature=4c7c6350f7db2636e126daee85a4e0e70f8bbc0d9b5e62cc303ddbaa8c8c1350&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
