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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROOI2BS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCboSAOuTCwQD5FqrWkPHlOJxaXupzNrZKn49kKlDztNgIhAKKe0RVDTMVi5a%2BPlT2lXiojB2l10jZJl7z6nOYDs5L%2BKv8DCEAQABoMNjM3NDIzMTgzODA1IgwUOrmPizJnNu7Z4ZUq3AMrs3iAzdc64acN6n7vtgzdXlnJ6fQFX7P%2F7aYMGzDbztowko7NJDZelm7cS4Z1XCMg02c4b1sBI6N4bYoXL6aIGPQudxSrUWzwWDJcNwjnaBSOc3WeWs74Zi%2B%2BJKjXZUiyq3xJOHmrQeHHqRVf2R9EQQJmSERPiDc3uQB9DnyPQKsQ6W87YGHNLg4Aik3tK9mM49tNuQDreqlIy61dUwQTvLWonVAGs951UoyXJZ78FdB24SdgJAh%2B4J1jpZ3B2PExyHm7bJVNwLW3jP7x%2FdvAUYG9AG3AB8PvnwfK5sJ%2FbJWvLvGWQObsCDHHOmdkZBYC78mWBCfqkKiTNNAzTIs6q%2FVEtSDD9nxE3EaCSdeZ6Dc79HlMT%2F9GyCyFy%2BNzg1MgEY1gWlW3wj0CIGMeZgHuGocFx79tvKcAuMrQbK9uV4rl5%2FL9YGKnbitY%2BRTsmmEG3Wiqqz4itFG%2BKnnPXm9ePLqwfna%2FNvmP84ZwhGB3vI4PjYWDHkt68PP9Aqd4V6kZrYAIVT4DakIEWjo%2BgH107DeaNZFbGpMHIw5RRGe9du1atV6QapCdQBH7jUVogHAIzA0unvzFaC7SNdu6ZK3HZV8h7LvRNa79uOVIITdq87n8Bjx2tnFR7x3ChDDRupvBBjqkAZjjR8B2Cta2d%2BbME72RqfMlc42k3T7LUIy4ZeuozNSwccbB6ovuBMk4FXEviNt%2BM0POAJVrlqRdhXKqhQ3BfqHcZDgL1yFYFsFewfA5tya%2FsEJWoKIKvARw93NM8LX8Agdif79N3CofJz7ZdBoUsxcDjPuZEo0Xgavgfm%2B3J8RV%2Bq8Ms51ozgZikrpCakgNpQeRvgDY%2F8uQSIW0ZYwxU4EtFj0q&X-Amz-Signature=5a6acf950919581b813378a17589b4a0e2d7c691c6a579ba991da16febb55609&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
