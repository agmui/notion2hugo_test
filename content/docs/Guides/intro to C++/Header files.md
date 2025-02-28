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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKIEVWI5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHaunXRmUG7qqbpIREFHTOTqXw%2FEKbA9U%2B4oeiqlzXbEAiEAmNWIMt5C8QgK6UkCFYV0ThISmsXwvGyh4Ld%2FnL%2FgTtQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkyv%2B9ZF0CUbux2VCrcA7Q1UPZHkeCK4BH6MiaT%2Fnx%2BHVHnGrYhbbqpEOaHGJdsLHxuJ2zORFStChH5WebZZCHez3a21m2awZD1Ciyskqauxd1hZDF8v1HuCaKffNydIcPW1hO%2BxZve2b%2BAIRX1Z2Fn7EqGf8mCLbDtqsJMknOvXMEKjzjunAYy%2FgjcV5qHt%2F%2B4cdu9jukhguaSPMq4Hqavh6DjL0QUS7%2BGAFdCn5DvImWZLT3jZ9BQR%2Br3yhe23cpFciN3BQg9nu0z5qDpqKavFMaFyGcI3DfTAmC5JXjLDVwAn5RqRa3MZevPBc%2BQyvMMymSEo%2BdSZIr4gg0GT92zn9NE2wpWu420Ww9Ls2thxPGRyqUDDHgexB9KwQ2PTUbaXV0lCjyTpC5IT0FYNBcg2jhmbiKeC4uKpCaYg54QNv0XNyJ0kOlr8XHzAa3HpL5ASs7KJ6NVY1WsociqZ59S9CAWCjipqYe2mf6Q3nJIhReTojxAxVBWM8%2FLA%2FxGdjj%2F%2BZqMOgGjaRO0r2K7SXCUTdwd8Lpe37uAttV0x8DiQvLoK1Z1Xim0aOQgrAUNvPN%2BOmWznSiD1U4BiRyiNEnc3YymVSrvS9%2B95hwHhDj%2FUriMmk10n7Bczzx%2BYOwc8VTQJsiUx%2FQNKCFHMPj2hb4GOqUBgWpON9CIkyz%2BcyukkX0vGcTNC8vqdS1aouHNTEW%2FOWmAnGhOIjvIFKA8ykrLeveuGGBINewiBLGekr7jn5jDhM6jKrWsMxp6KugDY0kmRt5uSgssETg%2BjOi8R1cj5DcoiL2BljgBMWDdbxJMj%2FIS4k%2BIep3xUt6s1sfAaihKlBOcVahQAzAakzKp1mJ%2BO%2Fi9CyXN2BL1V9Jzdk8qvP5EZuZb2Bl6&X-Amz-Signature=1e1259ca13d4e7b103d7d7442a4654d8f1070558b78369612d68c7088eb18405&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
