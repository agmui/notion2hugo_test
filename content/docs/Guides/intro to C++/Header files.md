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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWCUR5M%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG6ZzcvjRStY0lyrOQHtOxBUTMTqJw%2BcezO5WCXLRYeAIhAOba4FzcXR%2FsqeAMWFKdLziMEnAwgkzD7FDum04vRT8gKv8DCHMQABoMNjM3NDIzMTgzODA1IgxVQyZJA725ymqSrcYq3AOyu4ksyIRzcb3lwKAnMsMmjOjeVDrhZFsfb4L1iskXoobxjkGpMDYRGWbH%2F5pnvD6YfkcdidlpZOQV%2F%2Bp9JW9FIzkXV7d1nsP5D60m6RuvC%2Fl9gRshvdYgGuD%2BtU0IPA0ZHbMYWZIobfmTsNxMIxqTGfo37x3oMVy6XDW61aztR0LBDvchBJYaxUtwaWmxyckRf5M11P%2BnVp%2BxzQCBhVeY64jqAPGHVyhllkoFKqdHqubF19P3tCb8AXOmmYxVS8ZX4p5HW953sV29LNWdKNoDcECKvwcCGJikT686YzOe%2B4B8BIbuy1dM%2BDlZvm0bMvR9r3Vbbx7wmxY9vj3bOyseAy5uqk%2FZG2sPl6N1515Chemo9136NCrfC%2BkFpcGTOCwd2t4bUxujgCc6QoE9Lb1zBI3faSoXPhCZUiWb%2BTd9wexiIjGcZmk5I%2BxCc6zpHkw6tWyFk%2FQUFFjUsWUTjunTW%2FF%2FqPMZa7p1L8qnCWjwlrREnW9%2BeaX371mHRd1yxqvDCiNfu%2FYb9tkfKjZRXy8yOZF6duxTRtFL%2FglFz%2FHQ%2FB5i26RXxxo83bMjYAO2bm7M4eAvb2rlFkpJekTmdAORJEx2kfjWRrLwnLWOyk7dRXng65T0kDKjz1cnzTCl8dO%2FBjqkAcCYVOKv%2BUXacoj%2BvASAf5e6hyzTfzAuabe8FQHN4DgOfi0gVXl9bXiX%2FhHcjaxBligfgqbBFWa%2Bf3hAw56gG%2FxAfvCdobNABnw3vQZHDzw%2Fk2R21fDbNutM%2Fszer4D2sIhzgBpFYxH4lp2L1wynPg4VIWYjRQL17KLF9jpWWVOV6CBA1PHCmbW20r9P4L7NAhInHMnXJQILpbKY%2B62VQNHh2Wn3&X-Amz-Signature=64e9cbfc81b2eb24a0f43ec8dbbbdb3050f88ac2405d109c887595ef9e6cf38c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
