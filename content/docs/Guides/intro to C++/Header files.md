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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2JLQ6D3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7YQev7rqL0yh6WIG8Yu0kMlYR9R0mPgRcLxQBfgKx9gIhAIYP7htpUg5GY9EWelW5OBV9rv4%2Bdy6JSEyoL7kSYg3dKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYM96uGArtxxe6Clsq3AOid1qwUJ7rIsYUQcd7EdaVmMfny9thNrei79bQsx85F9gSau4RDYEZsRwFu0t9k%2F2Rf%2FXJ%2FGtirUHh%2FD7TMNZlWD7EMuLLlEinKFso1NhXy7PylKuhZKpvHtQDzpaIAO4Z%2FXHqk04XvkmxMe4U9GY%2F0QrPbQz7T4PGdq6EVCZZp%2BOZrF0LpINvuNkUoeAJP90dxAdgZZdfYj1RUAh50oCXU4pLK169BBlvkUKnnyjfYn16yj7WBIqWDl%2FGZlmW%2FOx%2BYKCx5U7JwKb%2B1UQS13fZjvYetAkbfkilBrvgpSg%2FcyeXOvdDV8dAYOqdrFSyuXa%2BtxQdec6h36n5fqo9lPGadyPzGXRmTdeYN0nLsD%2FQY%2BfTMjSECZiMe5DJviDLx46d3cbLXin9fXZZYtPwS8a%2BDNpc2BsdHalKlMXYB0%2FTJv3jb89e1drWyFKk6JpgAvMK%2BvGP4z5UbXs8ujOm0x0dXLngYw%2FInkhXC%2B8SSQZg6MoYqWAC4Rh8Ayq4zIu7cK4Oft94xZHS7nLk9okqnrtoyTU%2FGYyC512btUGQehb9eWdtuiumEk560%2BopailjqGWb2CfmTQRc0Iqq5pS9QYVPmQEGBd9Y5wcbpUhIiZ85PI%2Bh7hDDpzpauT8x8zCznLbEBjqkAc0TQ4Exl1tfafgOlT%2BOe%2FPXZiFE23z0uV8NrT1SEF7%2B155glMi3BAvopIb4NOHce%2BZYUvHixM15tov39RuUweLZGNOUQZuVFxc4AJclDF7HMLllaBfroU%2F8%2ByzXekJYmCvuSngZ3S834ZsL0X7dt14Vyp%2Bb8ajeilIcNFEjxbkAufqFmnDgUuxDlsz2PrvE8auQJUHg6LdigQMORrJe%2BOYQBr4v&X-Amz-Signature=387ceec845b49a707ecfd392f9e1bbd405c5b27acdd259e61946448343830674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
