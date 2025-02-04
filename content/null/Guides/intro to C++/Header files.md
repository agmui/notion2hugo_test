---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "null/Guides/intro to C++/Header files.md"
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F72DNEO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDkJIyEQ1dpr3vxgr1qzb%2FWvuEQ%2FyWbQun8omrRxmAelAiA4dp0Bt6H%2FvyYl1%2F38MoPE8SMfs7YZi96QX3YIM6hSbSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMCp48f0ooRA1gm9EUKtwDkkJ1IK7y%2Fjr%2Bb8K3Mvg8pYNBLRpvEUh2bY%2BTy6mc1qIaTgejjDGY9%2FP48tNohs4MZPy4rJKbu3o%2BZ7crO9ALyNXgQPfhF0tb6331pDOZ9EapICGKUjWh7NkyGfZWQEvLMQfwejsaCefHmx39eLfX38al36oXK8eMaIA9GmmEpwTQkfObNx3I21Kl%2FAO6CZdlsVft3SVwoJ2zBTL9QufgZmaH8oi7pjzyoBYEo%2BKErTq%2FYlW5LbtNUtqVYUL8j4LvD0z53M%2BlGsohZO22qdtTbek06%2BOpRlMHMXuBXw5gs%2BwlNzl%2FomCdSljtiIaxyCg1dOaJ7wff3bLdQPwOxB2wf44ZnK%2BnvDGaBSWkcejDk0eln2hEOgYalafTSx3vvCYFHwkEnPBsh9NY2Sm%2B%2B5YQtSBwCjVE8CchwFqeR6%2FBpYmAc0yFxx%2FcKS8C2M83Bce99j%2BDUIw0mwjvt84%2Bj%2BKFEAdH25tUk0WMwcQ3sW6bmz0WBD26OHiDp9WX0PVdLSo%2BHvvxY87rxfaYUUnF7rzi8dG%2FK9cOAPJ6ygYJBoRhDx6%2FftXpJ65YK37qOWTskY%2FXnd5QUkDnKxKcWqWwFK4m5%2Fsb2%2FiOqRePpDr657m50S9ISj5s0skuTadIG5kwqZWKvQY6pgFqTsyr1Gpap%2Bmhg6ULCZSFa752roLoRjXvXoeJhSHeppuJLO4%2B0RAQMnWiQQnYJtWjZxZA%2FsWUmwUOEZQ3T38WJaJUEyzHQelmgNoARFugNWI%2FQlP30IbT3GAwUvIMtq%2Fc8GtVGOJDX31DOGZOsOiIJc2YheogjWuH3FGgZkM700VDPaYAFvWOUPZuAPIm5tle7ekqzY6RQVA5uOGR8KHpg9dJhZk2&X-Amz-Signature=7703d2db274ef1955d3db31f7af85549319b2ef25688fcce2de391bcd25cb67a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
