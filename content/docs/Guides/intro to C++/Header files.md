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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGZ2XI7W%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGV8GYhU8w9PMcs960my%2BHjHqvGtztLqjAh29jD6Y5%2FGAiA6Y4crVQUDBBZBIyCeHWOmn3loKSbLRGJfJ4QnEA8UaCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM0guvi4zlxZxcvPkYKtwD%2F7TJcOlqL0hmjrTWVO1BEOOc1HZYP6FyqO5b9WE%2BBO1cMRiImLte2s78KvLwVDMNrBS6yjXzJOTN6uPvee9EUHeCpIwvEOXGa1okPDAjmzcF4bnpRuq9PSiMHZEPrEtLDmqIUzlrAGwISpYqRG%2BOUCKnAb8uNemudYpDK3ER%2BVYeYVR%2BvgQkvFPpkIUjJuDv2nzmhCCqRtGMVZaC9NQ2octdM5A9iWjKNC5%2FiUL8aDh6fH3eWHoQemlYlV0pHqPyKyZ8nICmZVmsWWRJfTBnUNYDkiac0wZzb2lszF5pJBbkemVKyvCOFz6zokWfiJ3ef7AxRVqoLCnDZslrAK%2BXfux8VMcR8QHd4g5sZEXzeuvJAKkUOaUXvqpwWGpzg3cjaiwpOrywXG7p04fMniBjH1nmt3rm9zHdDBV6JMFbToZOqaCOeXT1gT4WdX2W0%2FXF%2Be2DL5Vj8JDifRrLna8J68gKXBySOxnv2C%2BRJj71juI68OIcI88JiIom%2B0%2B4jVPT8laV4x8bZzzJZ8%2F3%2Bbbb5rylPQ8diITe4jBjjPpMq80SuVsJARYKUKQOOfOgzmYW0YhXtI15A1VJXTSerlLr3b3994koHB9ogLPuE%2BS2SVxBcwB2tkJWCh0HoMAwn8H0wgY6pgEmA2UhCU1lu7hvTgJqT7EEHCMP5KflI0bxQJsaR5%2BlUFmkH4KmrroyeMW0DMRhHDtSvFsMwIJXmz3Pi7RqG8NEh0spGtmoFfdQzijBdgdYX5kuUq7HLvbNHGTwgzpREk69EWGe0ieTTO6F1k9ANGWgwYe5R2l6fms48RFMayk4qCBQ%2FYdy7r4ATiChHeLf6ogRQC%2FjdyuhHkfrH1Ahwqius6LI%2BO0s&X-Amz-Signature=1cbc6e10f7fb31151cd3ff4000c2c70877675ce37f139c7ab6935d793c90938e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
