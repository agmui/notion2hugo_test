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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX6SA5IK%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCevk4x%2B2Y5eIv6rcEp%2Btm2bIrAfUPQxT5RLzjCrAq6iQIhAPY%2BNETG2mbVD%2BGgSVKem05q7VLuD0NOItoaPxRSPnnjKv8DCBQQABoMNjM3NDIzMTgzODA1Igx0NfVGWciok%2F29mG0q3ANyflaMrqba%2BR3XDs7ItlPLIxQI%2BeCUrPyzFa0wEbPj9g1Cmj0jZO9Qs39yVYfcvvrk9UiybAUjx9JNKlwveY7dovlCfpx3AR3r4uurALhs6ziSMzYqVi6ePnpTbVW0f1vSxQ8igqjI3JhdgnxEdTT4KGHvyANd2zrTU3FcHh%2FDWWoL1Mag1HhglkLa0kAbxxcKpv%2B9bdgBFfjyR7Rnx4EAVXuSuGT5jd9c0lVJ4Fgs1Tmd7MR6l7ABt50axbgwglU4Rwy%2BYz5CyKBSwzDXSH3r7N%2BeTv19CvzXceXB%2FKouw8vj4NTxH7axfqsFlYcxat06U1ZJNxM1GymEIX6FpnUTvE24Jh6mCcEXGVKw4yF6rXe%2FS7QFyXyBiq2ukMuGKHoF%2FRL%2FFq6quylt%2F86qQxhHvlFr8iUebGizRSCzeXD%2BR3RHigFIHi%2Bi4vy54dMCV6xsgffZPj6UHNi8kapY%2BGt6J0XMZGEMndPnr6HS%2BaVcSh3OdkLq9qynEPTg4INVX4zxwpG3x8bVdq5dSTzEBxYiAaOuLA%2FQUMHnxFpjWEII7ffISkO1yKwjAMkGVsCQxZrjzynmaRT3HNCBxhy%2BczdSMhsYdfN%2Ft1Gm9GtAnT6VeRgsVQ9Q1pIcoSgV%2FDDx%2BOu9BjqkAfV8EcZ5E40NEMIteGmMHsTBl5RoRegDwi6%2FRkuFBB02bNlne7aB0Z8XpqRIOpsjAw1txLSwOarRen7l6E8Qz50Zpedfn3X3b%2For7pPX1m%2BrFgTqfe5jWK3TOk7GKUHUzAFGOmo4dEPRixeZkZWiMs%2BYxAVtBXdnKGwJqr6AOCmvcbvVUJWyivh5bV7dE69kG2rq9t3qHOQAYwSOqvIZ%2Bj8%2B7tvL&X-Amz-Signature=8c26ec423c809f965390e2f0cbda761a03246ec506bb47f151a0df27ce9dcf3b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
