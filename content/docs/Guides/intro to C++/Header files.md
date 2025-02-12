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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFYABIRA%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdqRlid1KIgx%2Berxy%2BkzTs8W8PgVAjaN7wVje9ugD5LAiBVXZze%2FpRXFNh8hBqXAk2zMWQ%2FLq20Tah1lXvEVkWBMSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF3auvqRbxYPM8fBLKtwD5cfi6bGm%2FLbSDEExO7c2X4wl94zjjOtMsZGreafwGFo0zmgc%2B%2F7fXo3sSWbVYFTPe5K%2BYa2T39owb2YA%2F6LAf0SdZc2NGkC4IwLcKHOjmBepc6a30H%2Bf6XzoRbhEdTEmZuurtTqmLmGXRYkKHeEgD1n%2BAHZyNfA4Py3Md%2B%2FAvW3hvLpdm%2FCEj50nNjGOzC60iRIfIiR2gJz58NAbKr%2BFHGdHavEgC9amCg8JhBqTL%2BR8KRibx9u59tf2jtv5yCTNWQC3NxpqUhQgk15vqwHN8yuW0uKxZ2up9jk7Zg8HQEWNpbJmBnHsdSCs8HhEBJ9rEbcTnnp3UU4d3uEVs49P4hEuC7OMq07XAjkwmNKPgnXVddICzreXh7xAEWkugp1sl4mHXWJLIANQX26KVZZhYwTA8%2F0VTKszjgEw8DVEScDQVsEORNWVmdav7%2Fmqq%2FLTl9UaU09MJi3BgbSx5%2Fp9g7AFOi6Sqda3IsN8bzSj6CTPy6FJ%2BckQ5VU81ZSj97h6iuCahXQyH1eZyHqnvNAFW4XGkqpX2XgVocrpYAwIKfPv%2FkIimwb8Qbx64FE0oBbnyuVC2DIcaDdUJ28GFuSshEq08fvIxRyEBiIEQdg8wo2RNkuVOO9hlJgcmnkw5qi0vQY6pgHvzUZ1VGJSgJDOeNJyTQ%2FxjhRHlQFANoE1g%2FoQMoZnAmwn2dZj8DydX7aS8xboqYTI47uYz1pqO4YWhv5ZmY4qWcNofCzPYgeO6QF%2BjWr3AjuYc0v6X4P4IZ5VakZWyBBguRb6pEPt3gfg7T8CQperR811NKQcsg7%2B69gOZRMS81ZrwsxtT1lJmrZys4O8T40YY1PJmd73NdLjy9BEgi2nG9EkjhtT&X-Amz-Signature=978516b1d04ecfbedcfec629d4e19d7b15a830a70f82f3d87cfe48f798f86fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
