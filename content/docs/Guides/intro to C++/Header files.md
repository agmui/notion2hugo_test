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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBIHM4PO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8y16CiI4NijFj9Maq8KAQ1PZLJKpHpQ%2BnplTqYjPcoAiAoJR99yN2MPh9xhBwWxbAD%2FlBxID2D5vsm16tM8A4ncyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZeMHjucTak3VNHYGKtwD2lh9ZwBB664Fw%2Btn8uQHCzayCI7sKsVItxPrlybfyr5Pj2SLDY4LodwWvGKjqYsGBDWHH08nRRfoRhahcHbxbbNlNX8f5jaGy2K7QSrfMQ%2BfawD7dlukUppaLhj3R2939k0rkTh1KyNRZviGKlfZB3N5DYP2quwnAp5nlJkVdZZzH%2FURX%2BCl46pwF%2F3PgQs9SLamxCQ0h%2BUk5OWFHpoZ4J%2FHdY4dVs5%2FhdbpwrgczmK3N0F%2B%2BZPfuwFkneEHojUt0%2FlV0t2ncxxPsDUaJbC4Epf55DODVqMLyqG1CZLBrGDFSWBuQyYhlcEoiStuV0MiUgg6E4Xv%2FFcDBQLdghvt7ukIb%2F2%2F6vr338TTrdj8w%2Fw%2Fzkq5h4MvD8iiZcpfH%2FcHI5NFDAPiz5F%2F4wKXcuJwKWS4aBJEL6C8nLjimrZdpw5ZsRgorD1OKHZtrR4UDm65yqcIyWf8ZAGYXq53tT5taxDufO4J5FDQoF4wiCIezEgZYBHGWKdpQxY3cFsaeJKSyI5LQGQlcZ%2FPZXs8ewscipqDUfcSPMabtKFEKheGDqAaKd3sXJPIMdWT5TuZidO4%2F%2BHf5yllk6BozLkbNUUAYEFQBiQy4xQGKro5uli7PGjnPXrqNYdvcku1Y%2Bww9N6fwgY6pgEnXnhnJksVn5S4eMAnTWndP1UGqvKeJEPMsPsO1bqD6saOwZtvoFb%2B%2F8PmTXD2fWftweJMCblzrBYVOYceBiMBMc1PeCwj0Owj2%2B3Vb29AQ6ssTYF1DR7I98Qrsn0XGHHciesTaAsJ1ryGxeKQHGAODQm4qD2RAyPGASawpdKLc%2BvpMGk%2FkSdvDFt%2Bp6LVxileCBZRm54kf3NB3crZui2uVdzPH5Hx&X-Amz-Signature=09f114c095eaf29e99894e30cbe37d4c4b99f5941317c36130a92a97072cebf6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
