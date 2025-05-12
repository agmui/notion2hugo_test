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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFW37ADS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDjEZtIfqRl8zsBd4x5hekf8OIYQFaAyjYcHeD%2BlEXubQIgcED8zSkOJuJQLtqm%2BZ4alNVURoeGFh186Lj%2FCr712J4qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGMWlmh43CDk41NGircA81BwDvlQLZA2aBw8FAbnKPQHOXOyHFbdirDmQSL8xEVJZMza%2Fk%2FMWsdHiBjiPbf3drfxR6yyZv0YC%2FcFsi2UgWlNj1nNHfgqpLEpvwgdDsPxoI7%2FXPe0yUq18RFn6lazPzwFqtURI55Dd%2Bnr77wRtgMSa7dc%2B1lzHg71%2BfClomfqh6mzJE52BmIalXvaALxtR%2BoHaEJEv9OCNYeGQT6pGWQ29NRojTr6tmLOvoxzqMP0NLllWDPhAFDZP59UH3sTijizw91SwbVhdz24xNErWi3qwCTjxH6Kwyuip4DOW%2FCvaXm5FjsPBqHaTPzQVhStdij%2FLYNshmJ8z0Xnhc%2F2IxCprlUuHaIPJUdLxX8dZgyBQ0vN2MnZAru5jINvJhvvUoXlTT%2FCtmqdI%2Fx1NbTGW3vbBox5PkCu64wb4k7XN8g17f7hVBc00%2FmstJfKg2IQ2OHIhwi0eberEW0wFyoeTkhnVugvKef7qDLu97NsachpLYNnYDTlJARz%2BEJ%2F2r8GIHiqJfOuM2G0jy%2Faxdapg8Bhlplv%2B7QHt0X8KClB8lSezUl8kRiMeZM%2B66FpHr9xKY%2Fb%2FD1f4WhbEnIQJR0zvmIZq%2BMs%2Fn0yCRWuDi1SDHRs%2FgpW122T0Sc6ANwMISQhcEGOqUBNfWFiWxF77GwHYMw1DOk4FuEDoPUnk6otNnubrnB0rMgc6EtIwIJX5HJijbZkPBBKQpXJ%2FiTcqNVYT1YCzYCi3iz0aEnim4DateBuotMxXt%2BRzmj8ArLd7lIO12kl1XKMNKXgZNMF4OmH4%2BOG4WmWu2jaTMdRRENLx9LUOGYeZUmShUgnOvG8t6EwAJinuK2LOvrVqGx4pyfXRc2jpUApH6WYWa4&X-Amz-Signature=f468cf1306f5356538bbfc5a0c80b7332a10a54e9af7438048a24ac3c089bac2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
