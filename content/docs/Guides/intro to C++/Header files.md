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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6N3QAC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCAM%2Fb3JXzuDyVbGbBJwldMmTAsf9tuJ3qkapJP8c%2FZQAIhAPGYyS4U9UJvv4V2XxgajlwDaNxboXe6kN7kYMFU65GBKv8DCC0QABoMNjM3NDIzMTgzODA1Igx9yGWZVItbzahvHpoq3ANRWVnqwPGKvMi%2BSOd%2Bm2bmttwRLgimvJHFTWcxhyM6RpojFk16Wh75DCIJvLPtrPuS%2FS3C42JZ1X0Lj896cr0WvyWI70k3HKC6STa1pbq1LcMPT8AU81GbiTKxoI907h%2BM%2FkwJ01tL5GVpvRcdHmbHrsUx1UGlWSyNIcUeuCR2a6aJskxG7OsV%2BE5UGwi5Wlj%2B1I6BeMbbvmx9rCv2scKpRjHyt07UI0BpJdBCnMdObpq%2Fy7RbHTcisY%2By5acImjP8N81jhcShL81QQhel91rmAldBgb5F%2BXGZG7iUkw2zSEfIiSFQcAXFn6G1jokeHu0pGtZkDOTIUX%2BOcUhqrLrn%2FiwDh4j8BRwrLpP%2BluuwC7USJYiCvTBlHTSDOiX7ldhYNZ6XxF6qn1cbhNjdfR6ZI0w7zs7C3VQjGxyki5PeyWWa1VVoF6WkjSY1AJU%2F9RwbES%2Fikl7GjiLit8yNZiLluuX0w17Quj4Fcuk25NuOWI4JliZ4eHhJCPeVg1y93mMS5bYuYWVjn9eEs5vO9q2N29YjDlCRewjYQZCxIFlyZTVjFh%2BIYIU4leZA5jQnt1EtlnSLbuQhTA9lDsuwkiXN%2BIMrzp%2BNnyqKqNH2NJFMxdLHwszJbARsCp9qhjDF6ry9BjqkATjF2ooZpGRXcHTJEGorogfi4EUYOr2ExcgoXTVI90YC7RqjpRTLf4V8KEgBq7U4fB4SOGMGZbp9qUdUAntp7qn6u%2FNqrxRD38hYyJ%2B1SCTSuss0EzAuvB1xmUR3fo6AWqwcBycV4m4f7uEPanexZuqxOKtD0lbDaHAM6riqtbw6VUrrnxPhbjMRd%2FFVX2acnDQCxc%2FKn6NPDWQg4NoFmYqtqV3r&X-Amz-Signature=7de0719e9bea677842a0440e883088a72d4adf9dcbc41439f3ac247f8d0f15eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
