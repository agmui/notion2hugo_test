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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VFZWK6D%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGDwLljAZLblXmrMToBDMBB3FrHC5WrWkRGmI0fakH0AiEAnEFQVixc7RWSfBN4di7JimmfLj3wPHvqRkE9W810fpsqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTYd1WjFxLafnlURircA33SI%2BqZKeA9y6jTYX3bGR37E2rGhonhVDC624RB0P3hB8XBAbnlKtnFURGr8cG%2BClJEBHTcRlx9y22fQ6ZsSwiNAJAZVfe%2Fu0IQ0HvBurdOCHRtvmZ41Oy8zwERlkC08JNMIeOjBgXanuCkflhE9uofHXYTrbckufp9W2IK%2BC%2BayRlvmeQzvwPcvs2Gh6w70D3ELKNvFHKYxdr7u%2F%2B0Jdf7LHitkcjX32gi97IONGSkUh%2FO4FylNiQ4U0IZR1QFU56lQhzxv0HKga9t%2Bwhe6Vw7qoE%2BwhKQOkKPl3GwY2d%2F%2Fzjjd96OyPv0iC5J8lV1TftrR19yfHQtn6MZwXt34DAs1%2FCj5ol3nxQbOq5cSaz1yHLil8EDT7DHk21%2FPrA%2FAPUJzueEVr%2Few6SjhSE1wenAeqNtcwlnJRwDU%2BkVhOkWrTZ4dl2xD44pymK2wAGy58aps8iTK9ePvjrwN28CoZtZqfRGFbQBOevFe6UuRt38b5I9DmVeZIMb9fOFHM%2FQkRyKDsG1Mh6qnIzDi%2F1N7JVwvIPu7LQ2q%2BIqH9yyEBQ22aDkWSW%2BofZr1jaW1gSIDC%2BcBlXd7hV5LnhyjqlLABF%2FetYEn5g19udO6BmlKz6I2RjLORo9F6LEvFGOML6H3sQGOqUBiuTNVoWZvj%2BAHwp13UpdzrhhWfrXmsFrUpOjJsjvHSZPbhyfNn%2FYjh3oXZywvrei%2BsIDo4g5zEnmtJuoXopUkQA%2FlmAcYDS4yhuiW%2FwwRXvbUbfmEW%2FQalAlNn3I5efqfwh%2BPDrtIRu7y%2BmMoWJD2l8NR%2B2uuL0t%2Bp3isQl8nFuFPhB%2FV7eaATC1ibA0TDq4ysXvQ8NJJvvT5Q0rQwymnSNE8zkt&X-Amz-Signature=c04314bde001834d8540e2affb320901693e5d5b4d29fea7ab81f1ba156519e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
