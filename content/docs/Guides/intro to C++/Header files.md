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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSHVX22S%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCWDWXXQvVJQD2NF4QjjOFbrtj8CYPAmiws2XRH5RQ7dwIhAOSD6LNGHWYa8%2FfRoqGzFcDkUXIZsMLd3gXp57jjgJ4OKv8DCG0QABoMNjM3NDIzMTgzODA1IgwqmxW0zMs4YRFeZj8q3AOcAu4k9kMWh2l2cecs2%2B5vEo4mVlocAEtBQk8lEA3O3BqVNlceS6hVAD%2BHfaXmCYwj0olfM3D3YWwhE93UUB8PzFVi2ZZIhKm63wIZHQ72t4Hd%2Bo4PKMV10K%2BnVdEg3KfTp3fW4MCC20YEcuSLjiZarc1TvbXA12SEd9Lg2%2BFuG4JpzactceHcinVE6wCUIBd64hNyD5abztMmnUL6xDdepkbURReKCphlP00RHE8eYMmnDmacknOn6BczJQ%2BKCZ%2BkyHJZQqT0wP59RwG%2B87WmPlKVHdcrQop4ORjETUDmE7RqPpdUMw2AuL2BHadQP5E4RY7u4nmMz8fl1yPoeh%2Frd3Qb2LjRy4yyQaArzgBEjD3uQ92DWQgqFwKhGf8UKZnZ0jsEZSKnDwJ5167%2F8fZQ2YmQRp4x%2BO3Uc0hJFJw92XgiA9HlwhBgBsCwHOynoZgjhc1wC%2BUIdMdz6BoBwLHdPHR8YPHYl4erNJClKWp3o4qTSZOLExFosC3YK8y%2BWGt%2BMvnEEHHSqD97CSIGYqG5xCVj65tynbzPyZN%2FLGhVkd7qy9nZDlQK87kMDduoKSyrxHr71n3Bsi2AnpA8Jbaw82rDaIpTyQ01iaPFIblLRyXuIJUTvJUCTdSUkTDsioDFBjqkAQ6YYlTb%2FkyjJhrdTQABpbDyezNpn9RkjuCp5NoxahU%2FbpxkbPax3KdIgU%2Fiosv%2BraIEZtfOjE0xTNWGiQnKBR5tHI6x3GpPU41TSHhEkrnevP4ec5EDA7Ea1RJ0YLb4ir6Qlp%2BXgQfefftOM8mtpmogqaXq%2B2TNhCCbYLWQKAqq1%2Fhsff0FDWEQJRXcZGvtv1ar244MaSjiAerpgCA1MeBvN3Vh&X-Amz-Signature=315d2e6a5a1013d7fc3df39a34476060694d893b862ac91a71252799e28ad987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
