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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRR3FCAT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T004426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNbRkvvpqItugci4rKYRZcqx2ZwYf4tW2u6nw8uSBJUgIhAO7r%2BSZxZswaNovRz3qNpUvD8DNIqmrQgWjynIQewZE1KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYt39pfZaZtVDxSYQq3AMW61YkKXXvvLpfBXsiXCKA7X2q9AxzGnEOsBoTs5dHdJqMEEcBEFDuvTsQKvd1PEd4IKJJmjW6pqXpPU%2B3E2RKY7JLuI07mZgH%2FpH4qahfW2ac0HjBmMgFBgPl%2BX0N1rYqB8lTulxo0R1UkSdOjBbmaVcgipJpxOmSRMiZHV%2F2X0GKx0nOL5YcNs8yQ%2Fbroc8ViogrBnIJOri7u1EGxf8dfAJ5Z%2F7G7lNCV5X7%2BbRbAV6ydNYjbmOj%2Bx9I3BoZXhxto9fXu1nIgtKe2q95QgyJFJVkmiVjOwICB8BHN6Dzdfwj1LpBk0ZyKMiMjeYMrDH4Ml7w%2BaZMfd84cGwmorCGSorUd5zuY17cZHqLv%2Bvhdt3cK5pQync2sfyWzSxcaitztQLjsVrwvoajCUb2Sf17PTbnZElk5vaqvToDi7lZFW2NBeJ17npl3EpfvMg82mXYlAzlgbronAQ9bsIeQxCrc9aOgkVOshXrxuLIZTtM9NkJyP56ct0kkAfadkgNHm4lBj5%2Fg5HM1QrXM2R%2BC%2F9GQFkrJxG1DQJ%2F%2B4dG5Hcs9oGftcy1l0JRe%2BsLOYYcR5VnG2Mavv7wCpXQvdB8YCJf%2B8bL0fn%2FKXAbQKqVefDzHM3Hf7LvLK34oZmkazDFzcDDBjqkAVtUJ3hr394UENUnENN3QsQfNW3bHYRGHa1tn3LK%2FwDaP0FZZNfVQw%2BKfJrrQqqo39SoFUOwdVoLVoByP7LIc77deOMV%2BU6WzxSCULMw3M%2FzjhvoNppBK3gUF1qpDlWPJV4jqdnRUbGI9zENoUW4Hb5SvlDZRLJGBZf8w9R7mT1MzFX50A0TGevBqTNKfgn0TcvfBtxq36JyTXNoOGLqmgTr10Mj&X-Amz-Signature=ffe10f6586b12f633e305a607c39fcc410bab3aaea1b89200fe8754a62ca9853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
