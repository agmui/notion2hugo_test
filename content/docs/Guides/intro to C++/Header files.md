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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676JTYVBS%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwpH24%2BC1NVqwUL84R%2FhZkdukfEA01OClGONEFpmsSmAiBb%2BvV0nBAZDQFYXa91pzFEisep8Nx5Ar2yCdXvhW%2FrPSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvaGxgk4bLXlxoPW5KtwDdVf2IjYEju93%2Bhg3r%2F0g0B5rc%2B5ETIuuMQ01JK3zG1rXNDSJ8cdU2xU1PUAfVJZbx68OmCIOm1x2YH%2FRQxZuT%2BCfdNA1N2as9MtFR9SWOycz5uwwG3tQO6K%2Futnmn5NYVWwupo0OTm%2FHdkM1084zZWqOJP14t3v9v20RGZkwnKzxaJRvSUnJ8qYz0H4H9P75VWUhkmKVcL5ZYQW%2BIUISedKXAt%2FZJE6etDTC2HrHS8Hzv20hHM1%2BQsIm%2F0JYMoFJWpQ%2B2evjHa0mrV%2FsKgvepHGIgLjsBc0vZU8TzRloTRUqS%2BFG2EOo3X7PgmXkns6O30IMbB03Eov98k46yX803KqD0Wp%2BG6RE%2BQIgeiIeW2mgO21PxZcOg7EHXjkEvgYQ54UjmtlLR6e8fOVniotm5ZttrXa%2B0DHO%2FQ20hglfy9qw2c2HuhO9AxBTUhgOVx9V6ibW8qUBihkaXZX0zodo8qO5gaYQvE29xhfPWf50GJxZ5dLLjQ5tyCvdKa3%2FBWSouJ0ADtnTjGoHiNoDeqHhWWdlln3lZ1nW93to885YR5jZqQ%2B6LpSdM%2FFIi33kn9a9R0c%2FAMb7s8UJibuxsvMRexFnpzgBEC3ij28PdSDWDf2OWGgBcCAR%2FZ62SwowvZi6vwY6pgFOE1Nw8875GQnDs3%2BBtSe9X9rq9ZUl8sH3yERkmtofdJV0cKTQYvd572RCSBd3k3YdZO2vspcpXDGRlRj6ds0ff4%2FlnOgL65JP66jyq0nRKOekTHg9cyIW7ggNFGdIPW1t%2Bk0ILOAX6Rp4Owv1j1heD2BqHSs%2B%2FYOXNXsbXG%2FByZihMlAy8Dn%2F36snF1ybxua04z5lN%2FzdI%2FfREUkwK0xKmQfWzL6I&X-Amz-Signature=478ac86311e55592d218d04307aa34dd4f58aea70bac265c6eed5fc1cef981e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
