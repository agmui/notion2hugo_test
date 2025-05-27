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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGEPLRSM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF09osE1urrMEr03Y%2FTVvYQBY4%2FU4jHSaon7rCctP9AkAiBOdWOslJBXmkhD0I0mvb8sty9%2B8%2FvnLCH4pp4sRCcToyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMkuY56gJqOEGcCn0PKtwDxjzrpfELcD%2FuMyCHEZQgmh1XIo%2B3ezaE00AoVTPS%2Fb9AwJwk45RixAv0dsG1LjIcnqf2hZKmYlvF4a49DsIpwybsvxGEEysvdGmZgEseTkJl9X6hS1bkoeH9zTGdFiorPV9saceEh3BXW4oiIp7eKKGJEyEoXHIraSeICxghr3NwByvUcGz9C%2BZiWobt71uePG8pcmlOsFO4Y4KLE%2BljHosrINaPBVc0RGiWnfBzg2AHWhEBIzksGlzi0P85XJiSpcY4HHGElUj4%2FZl7uPepgHggSsSS4w0XTvpR7APPIj8778shm4XsqU8IsP2kf9FlQ3BPrWzqSGunv%2F6q%2B3%2F%2BQiUTMEcIr7zqP6kHxy1ExJgxjk1oFK2wmSg01xafz65PDxNr%2BeQZknCMK%2BxvJwdMEEwojoQpWwjMMIhj9gdC%2BlqbdfkzTvL8g1zTwu6vvHpQd3EPfE1fLLsX2foNYcy74AcdHYNhj02Js1QL2XCH5FqilAqyDrLFKLeBwllFOymmHC4FQQ39sWXlxNFUb8Ls9WA0SD9yOzW46qwlFT%2Bysg8nxX2HdVngRmiVqo1AKildjlaiUsM32FyXZuBbEFfo%2B83h1Xltl6MoH4aTfTTW6AAK6qTtu6gYhZjtUosw6NrVwQY6pgGfCxvg%2BSW5t%2BAnE9StHVxhHladvft8PtGeznrQCqZ4dKrdiZQ11YUlzXNNFYqRzZVzgh3iNgYHor5ftoPhfO6%2Bzku6rLvaMi9uY8NEMSJOdMZr7jtEZ01sfY1U2bBrExGhG1mqqsH1RdEU6WSEKsRFE824%2BfMbTdm66KiOhVrPfEZ688fvI4AdHvP72ejJ44JJ6Z9XJ%2Fx73lqyHZA3TmkFWmOb1rIk&X-Amz-Signature=4fa45dd9b46cc1ada4d0f7f635b35090b6cdd21d031350503c2ee4641895d16b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
