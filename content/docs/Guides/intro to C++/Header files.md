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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIX6275%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCoU03NqQmYefDYOpkOnwXT5Sl2hY9tW3eU53YhDED5OAIgbZbCskaQ5fHUB1xWYDmpT3plbA3%2FSpBvEd41vl%2FONqMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGgc7PA9Am7UwRKhUSrcAzGtT6AkOm5UEfUusPOJ%2F1aqIve0k9QTwAkdorn5S6TYzrpvSKW0bneXAtDYvD53KCnHK7jZPMe9ShG7wPLy5ZfVDdk6ylFdxJa6X3YXdHpDrlpHvKIVBzlKWss6LvAUrPH%2FjjfGxgbnv3%2B5X82%2FUb4umOorG9ELVMJ0nFF4pQC%2Fy03x4vkDN6IPbGaK0Qxy8iDyHj1UwxkwQA49eVkYLaFXTV%2FZDVyaZfLKLB2Kz4tZeW4QDkKUlBLNtIRpI6hvlIPNOBlEP77v9MAEWn6D2Bo%2FgDTPLnIhsFS0U8mYSrrdQRI4M3EoAs1m2cAJb8Qt8uf26%2B%2FpRYG9rnjC4ncWeUc8513iBJoZRQ%2FZgnA5EfWe%2Fx1%2FlMtRR6T5InWuXjY2X3x3ptRphcZwB3LNflMsJ7dZCnMZtsYZc%2FLDh5QrvQlf3bwevnXdxKbyn32SOFjdS2FVhmqyoKkQsy5KZvmY9gVU0HXQnPRu0OuoETzrYd8WXHNmS9LlkwkUzvznwuDOfjteTY9SU6O8mEvY4sNQKQdOkmMIN%2BmJCTN8pNgLqd5VDWwoNPw4Bq3Gu8ifjfkXe6M2YBTpUqikXDyNapHtA8mNjwElRRDBvj2THTvv12xlPibMabw1KowSVu1zMI62iMQGOqUBBql4B62QYhnAXpIBlFnR51Xa2J2SPnfQ%2FVekv8WEaHck4UzRVzm76AzTQftwl3fN6Kt29Q%2BHwkjwRQZ9EGER1ycV%2FMlr%2FnyNtizEKpKBVGeJhNZYzydEG7eWIr2tAUHo%2FvM5zawNSPbZY7dt4AD3w%2FAwM0hgqMzd%2FD6MKVnhOSK9wGC8HqoKPTSuZpjZMx7kU2t%2BgpJxv2S0Dlw4NPsaKD1Iu5i%2F&X-Amz-Signature=f5219b967ff51f81c801756a7ad596f9bdcde680b420fedee8377cfc2a298167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
