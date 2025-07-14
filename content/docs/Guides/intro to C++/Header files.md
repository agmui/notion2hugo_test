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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JNCHG3%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIF5sj39UrU5sKc2SedjTZ0gK9DXd%2B%2FgTgr3EJErDCjW7AiACrk7Y0Ei1PDJZqoHPc%2FJZgFsfF7xScV%2Fx%2FqLmyH8JhCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMVtfIdgcMqFFCJiBZKtwDoNKWVO92loG4QIKMRVIDLQfCE9DI5Dx2zw1Y8gQNN5zLpAiB1ZKWRlmMybj84oOigF8f69YHlY%2FcZaul%2FHu%2Fbt45Wo9Hc8pgAHKqI%2B4wTIQKN30SEIo4TXpwt16vli5Fa4c3w7ppWanPP%2FOJlDCBPxnnMlmetG%2F0zLApl00NEcxhuaruT26EbecOwzK0UC8Oqqsr%2B9166dLNRYThbbrfMYqUTIuU1NflTT%2B8cbK94DeX3%2FHQl9zbtN4Tuxyigr%2BhRIOmGayjP6msFEqo9HjyKLHlKKUmDXVPq2zYaEwAWGjgAg%2BzSSyA7fT4hbz%2FwE8rPiSefzKBrmXyGJ%2BGYo7MwVUIsqy%2FrHqTz%2B9wBRG7p9efcavixKeF6f1ehyF2jgYBulLKvOYgSYpUjnYU2AGV0ZT4k4EEWGBgpkB72fXK5xxbZqf0uAkDkuOXmNhfw5UXtoyfAjEoGLlwaLkqkL%2BvpElAd6pfg5o9icOsV6lREAAemezuclAalt3Nr7SEOahR1KQsIZntQkFCpEdPraG1UCRuQGkr988Ki8rk%2F58jc%2B0h5T8Go0fZjMJqUqraA%2B7fbdtVp74JA%2BzyfCg2DVwHR%2FF0J77amjPNxV7n3uHluu9Zsm9PfFFSEbbvVpww7oTUwwY6pgF292sOnCw69XHcrpYzeJ79v8Nee0F0wAuTMNqbzI5vJYrJmTHt%2FTuHIdBoero9QxCHANp%2FmuKRK4vANGwlaZrz8uNhj4KaDANb3TnpyP%2Bmq3TTcdghyly7AMS9B9KMjq1scUDllN3qvmg3dlThrSxJpgYLGi8fbQ%2B8m68rc0mTJEn18P4CM3uUS0ObdNe4k6PUkOIH6bAjUvhFEpTeuwiBH6EI7nOR&X-Amz-Signature=e01af9ec85f1d155f2bc1f2925a0ceb520ad16c997cf650c3066770b68dbb66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
