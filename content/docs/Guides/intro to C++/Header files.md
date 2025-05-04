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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKUM7HG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICjlki%2B1i5aFB601C2S%2F62NdItdZ2J2VKrNoqJfyBjsPAiB4zh%2BXzOEtEBGDXdH%2FE3rHH2THHvOJyNzQzqkmrkDEECr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMxS5wXv5H0VUdtS07KtwDo5WvkfbAUT219TNLW6cV22qn8ovFs2IIl27WYBnohDUcetmFfB3FGI8tqvZ0JnqmWSzjOYCB4OKe8ko5WI9lplcWSyw2qFELKQKfrU8CWw%2BWiN4%2B7OOMp2wZTDtAQI49ybFF6lMvL%2BjEpihY%2BdqSZ8uiFPohIn1lvSBqeDNdPfMuRC9k3%2B19BA8zCEZMzJo3B%2B1bp2VlEaLvsq4PbsXiHnSyGdCjtwWChNLoo5EljAftigKni6kePcGWDvMKTILakQzi6MGt%2FScRsvDcDntf4M0BMTj%2BPmDjz%2Bz8hXkAW1wA6JjGfRlEOXHMVYJQlsjLgHLWyfOdsrsF5VEwunMN7s8DmkWN%2F09XGalmceadSJ7AMFkHUPvnKO0Uif3SaSL71OJ8P%2BQ%2B4WjNbWpzQO4%2FEWur6qXql1eB0tIDPZuXC6eBjUKyi5N5LIAaSaDnX%2FQn97%2BD1uQ%2BILucFbj3L5b%2B%2BMNP%2BkV8XckaxWWg7hUUdVozjBFrP2JRr6S2OezF8vvNudD5xF1kKEkKaeukfMeKpg9alzgJlAQ1idEtdapWIGzwHwt9GeN5d6lsmGoYhGbJuVFx%2FiBHtcn%2BmdeZSRHekIeU7ucuszmOFM3Jtsi6CLJpw7Vu14F0hsU3PpQwguzdwAY6pgHhjUaxRTaQQ8qVRE%2FJq9I61ruuZy6bdBjTKW%2F5BQm80H6Qq5jrRtcSP7yFYF4eAYsHkUgJYZ5dKwR%2FyrE78Gk5RWUo4dikgcG%2BJFvrCI8E20avlUvGPje28mQWfTVD%2FfGbz5nQ1484VdJ5bDFLYhVMKd3fbnZs8buYY2%2FL3uKUFF38sBWW6kyUHId11LUmVBG0O5n6hXWOa4o%2BECSelK%2FMlTBI23CU&X-Amz-Signature=920bc313554ff2f83d217aae581afac88094ac541276b4c52b220b0a216b137d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
