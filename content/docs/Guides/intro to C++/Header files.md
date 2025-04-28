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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6FARZUK%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuLvRqgyar51MqgOfUBFgH7PLeZgJmXP%2BGi2mEHHN0mQIhAI2Frb3VHs%2BAAX3WjUWYWKEEy8OHYoDud3hT4j5%2FUfK7Kv8DCG4QABoMNjM3NDIzMTgzODA1IgxTN2IRW1BKn3NCmqoq3AMBMpnXKxqgSxvmsDBsWFYWkN4IxrsctK%2Bi9lCbCRrHlRWgI197oF6tuokzbgn6jpd%2BV89G4iAcwkbn%2FO7lHVtKrmy4Y3NtqH5prtzfmihPg2gysy4cqbz%2BTe1%2FfnkJxEhkIp6Kg%2F7Hi8OOfpXpLeBtc58bwO0CdaSpiabjfqW9BQkyV54uCRgFkNXa1r2dTVJM08%2Fb4YnblFKozUqttIPeWRF8o8Z8z7ospbTetOHSPJYvjw7hSMPBEeLpZy1djk5FLEAnGH%2B95hwYeM5H9%2FLnK2ew2taz%2F%2Fn7qT4dyoPI%2Fev3qSmSU3ijN9xWqmXUT18bjqHLgUK0n%2FXlV6iyVhGEam2QnSNvxX53lIACmLkOhQUi%2F2vjfg1SEHSgsOhBjU1pXsGVy%2F9EDsx3OO%2B7kNfwJKjXtaqx0al16MbnhD4I7X5fTXbNis8Z8wIhSUJbEAeGhimBsf3O2on%2BahOixsBcnH9qUu%2B62BizeOjWgmdluQd7%2BSaTvRtp3lZ3rayJcKISvFA185Rb0xLxEj%2BjN2716LdPi4WOxW%2F%2FfKkNpPKqeP9LA8hSJELlS6cIgS%2B5zFb8%2Flv8UGdEIA9jltrFgSwKDSByS6NUC0WGHDR%2BvYtooDJC8WunhWbJLpvroTCplLzABjqkAQUwicS3%2FojcnuNRj9k77zxlsRzHAMETbo2lyDLCyOZMErUwb8mGC4fWEqzwUW7LhNMWdC94GCHpALOb9HGcamGgZP58byEsscSWdFJEXS6fXSGfUy35l8dkL4kRu4h2qicPljpi2SELQdYTqxazYVjg1mPXqPOZIg6oG%2BcRPyB7USH8SELCVj56fsdH7yyN1ZTxdc7vjFbPMMsxroIkdIC2ZsFS&X-Amz-Signature=48b6eff7a592eeb719e1aa7ecc04a71c0fe4825a36af4bc52a62fb4a91681d2d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
