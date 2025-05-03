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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSSBWLN3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICc1qHkmKBSwCdEEsTtq%2BP%2F4ZStybenKR9GCGdlQKFWDAiAN%2Bih8CShI4OK8DvNbpojhMs%2BGnbNteu2DiJUfiRDxzCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyxvgRFcmaMVIQ5SLKtwDpn3GNe9JXpBqNjX7AdljjZOQfFM3bV0P8Q2uo3hjjfificK9hcA8a1ZwfNOItNSQs3BgY%2F%2BmmnZQLbDjApaXsqhf9OUL5oWLch8T%2Fuewk1GGNsFQUuYLIixmQRFeVjRcLERK9jmO6iaQVTaO0YG%2BraVr5G2kFTU2NTqThkWO251VY0NYXIs4iQu6NliHx%2FgfOqN7A06LnWW8QirhIbiKXdU9CGqMFKYm8VoO9KxxwLA5WzOao3AJFir9e73VxhHsFOOreF9fyZvlpXrGkVwjv89heve5MIvzTAFD3gV278GH1WI9bCFl6fgWlzkraeVQuUA6CG3xzQJiJZx57ixKiTpI0gGzccjYxb%2B%2F%2Fb4FDZ0x0p%2B%2By7ceuFZhmt5%2BstTQGxOQASwwqlvNVNxFThyuFn4VlOL8D2vPahxOziWJcm4Mk4InB3%2BRPWPzd%2ByrtwAY3t6v53G0tTvwWNoF%2BbsmsBrIAHAkpZV0ITLxumq4s8YwRVBwZfhaZzS41svb45pXxmrYMZkZtGpFdGJqmzmIXDzbLtSfiVXWFab32g0dc2myjgXrOdhkbSY7tfUCjFTpl%2FxzCq8caUd7cMQrc78M1xskTak4bFMhKDfYa%2BQEzpGoTUxYAY1Gb8CdTqswmrPawAY6pgGf6tFdSFubji5w3jeeADimSrYM9C48xc%2FCF4ZbWD2zDKVPZffvxo6nM1%2BxjNrJgxaUulXp%2B4%2BTMPOd5PCHV3Zkm0tKT8Zg6KJAMv%2FEkiZ6ueSqPr6pwv1Ow8ggoGZ2AERRDujK9XzpXdxfPpN74FwtAdBR72tScuR5BCZvcJ2E%2Fqu4f10%2F5Tl3uxSrdoCmyiA%2FVXbw%2BrsoVY78%2FfS8FxWgAcAe6VqZ&X-Amz-Signature=290033278df06fecb5f25d540e91f389f748f3ea618657aeebaede3dd3535d80&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
