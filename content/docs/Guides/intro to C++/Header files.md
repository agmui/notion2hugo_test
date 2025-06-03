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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2GYKEM%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIBC6JATTTLHgA9VkUD7yW7f95ELFXLrSLx%2FFHpXDRaPjAiBJdkCcq4ADSscHTanCIpg53owFm%2BT8NBjtBBQEpfj6ViqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjxcmgo75pBTs86mkKtwDXQAEa5W%2FF9m21mDVrd1tQHy1t7ZMj7serpsDF%2F2ApET0BW1aS%2B%2BGKpZ66eIL%2BitMTamZHLs%2FyizWChYaQ2XdRNcdDjHMg0p2yzHmqglDhBLh7HSegOGU1Tj%2Bh2%2BGk5pqpMq0b4Z8s47qi%2FSsmSqupA8%2FqkDLe%2FKyER0yvE0KSNlsTiOxGThL8bYoecFH4frdRuoi7g%2F1JOiJ7gf6%2B1BuMiahWRWS9oweIjiJxzYdd9l%2BqxhL75350kFJEEZ6U5%2F%2BqXbV8FpHqUYggtU%2F0T09lAZQ2H7SP6eJg9uUOoYNw3NFIibJRT4fMYa%2BerlPROZDLwAwOHofMr%2Bse53HOkttZ9c0s69ip3tsDcChNYwVcv42nUMYEWCpPtbtHJ69RZRCjUaCx6xDt2AcNYVwny5uw%2FKfhl1souJLb7sR7NW8kT%2FclW%2BQXxqMOjfq%2Fh8jxIch3gNprAtBsMYavh40MGPJymUnlk1T%2FP7OXMEo%2BOTdWqKL5eMhMfrm7ItdsFvlfAYJsAQVyLGMtNA6bSBqZfs8mJOYzab6BKxb%2FmNX4j8k8WrqQKYy3VAyLNSW0ei7l%2FYXeHI5ZjAqtih4UEuyEItKDMF873tyYqkzt486v%2FrK2Ecg9pLm1e0SK5j6lbow%2B8P5wQY6pgFnnbALGuX4i02UkJHlaCTYkUdiarJDZD6l6e%2F77IQB2PiU%2Bd8t2TfYlhXzLRYmpw9zSTSXXHgiuOktkxEEMmLPpl11OvfWRtzybEeczZcKM8qP9UJB%2FGExQuLaL4okhJw7YkGfaDIyqA7xUc2KL2ZY3DvKWiHNojCGh8ri%2Bp90M4D%2BrxzYBLxNFNk80LjlkVvX9xpOqYFxp9ErJ%2Bp2bmezCbLBmAqz&X-Amz-Signature=8331edb9f98c6469417de0c96097dcfe6b183852092ac5366a7f08e318f8b8d5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
