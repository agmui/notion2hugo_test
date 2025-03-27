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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X264NP2V%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK4NfddqmeGCBpDvkthGJd84xzqqca5bwo3verbRYeqgIhAKwbh3xVbFx67Hb%2F4tBx2BqLMeS5JqtiaHst0wCJ7NP3Kv8DCFAQABoMNjM3NDIzMTgzODA1Igy9hSwASJ3VF6lbTKUq3AMLaJBTZ%2FGhhNSJmOZi%2FtTL1VpZQgJJNhQ2Qu7gEqGC72z5VG%2B2fqLER81o58UH3Tea2zpBdK19LguQ0aw9zMv8twawVfN8B0BRqAC0hZy8OHLdNrmq%2BOmTZ5qlyPT9SPCQE1CLBvjVxJQioOjzv8VXZOLR1hLd5tvyR5SLFOf4KnrUTXRbE0zAx8eOieNa5hwu3loeNx8e97pASkN%2F8j%2BYd9Dfbu9lEb7PDOwC85uLCIDJGlXKEaseiPrJJrWhw70RURlaN9mtIEz3modcGX1SK10RBDyJIdCj26MOdRVMiCrZTc7sbFN5b0wmFRhKrYsLT7oI8cZZ84DamdZelz0yyS4uX%2Fk78e5BljBabcuq0trmOpoUgf9cjFgT975Sla6rC5j%2F2zHsXVEZMJQ4LJK%2BrtYrd3DjXYlXJnYxkdsw4aBwQPxoUH57NARZu7GhMQsPBaiHsoQXIApoaTfy8IrsllAjiFw7NdYekTLOnDNbVsIl6uTJXCYE3mGRjf1jFefxm1UEdHmDrNW9%2FrlZCWgXx0R5ygUS%2BM1tz79Apa77%2F8p7yFXXqc83SDmz3lRHsFUZXZHlmwQPNkYISrXd5wjUWJ9KcC%2FAu9XC%2B%2F7bVdDhLRRFV0pWwC6iXr2aczDkoZe%2FBjqkAfyEygKULxmW%2BNqe1%2ByaRAq5iuIDqyOtmeskyvjJYRriA22S2Mk3TY0wgua4A%2BFZr9H4mGFqRpiB4OvPxHTM%2BM7zQWQ7E7a8THcKu3b21VuqvAiNW9sVY2NbbCMKQbCrR2xFxLMlgBQJ8cSrCBBBoHx8XdGwBHSuqXGPXuPZmlwAB8Fvkcp0ITbV6lLWbX3phg4l1anoW%2Fsy0TXUAoVCtD5thJ%2F0&X-Amz-Signature=6de760fc100eedb2fd783917607f29d2e7528858c6a74974d9b3393e79af6988&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
