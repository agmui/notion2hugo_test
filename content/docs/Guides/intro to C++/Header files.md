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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOYSCVB6%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIBGcEN3aT720PuI27z9d1SLUMuofTI%2FfhxsSk66UhTx9AiAcPhiT5uSVHcCLvWyN7%2FAS6UbXm3XCPcbNzt5rMfVYZiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOxeL%2Bw5uViAbIsqsKtwDm95EWDSj5TfeTErXYriBe32UYRE02His4ExzfhcIiECu0uQfqs1WO2JCE9np4BLIg7wfw9Sp7igQ2OqpPoVps%2Bd7qk28tOjx%2BaP1zb6zIs6mu0iJ9dYYOxo3cXoKs2DY7Oz5OA1D0EcQ8tRpV%2BKocd%2Bfw%2FBBImRGandJXYILt0q2zv4VFH5P9AjKRLdROQjebbl0lvWFMtBgK0jXvMoJXL7aSXPGt8T%2Br%2FOXM6p3uQivSZWykywrdE7ukrAnasf8ngFMYn9baPtYKwQWI8oeI4%2BAE4UVODWRmk29m1%2Bj9SWI6imXpSEPNaVog2TfKeL%2FxoVw%2B06dvnwVxYpmrUX0aE6WLEOD02dADwl7QsCRgLgZ30nedKmIqU6xBR7UJwAf%2B4xwatIZ3cLDN%2FQaWSn%2FxOEG5xKqpPoXMJR4HCSFz1wl2Lhx8AsLVIapUed6hm%2BP0n0dEB%2FiWh2T%2B1c15Bgvcg7BXWfq%2FmYi5mf9uOczPEKzVUBGDovW0uJnGaaJ%2Bd9L9P%2FGIBg2IYhhCojo6WErqXyZiPasugyC%2BkaT%2FSVTBuhAxdR4mn%2Bleho5qQYi9wqdxRji%2F5dJBoyTE5YhOzBHPY5CzxcMGB7%2FD6SkM%2BfBiB2rQ3N%2BspAKLRkQmHYw3faTwAY6pgFJf%2FVfAt6Y56qsJkw8bYPJmJswP7tbTDq9NWeWIRP4bENmzuwoa1ov0ikWZnUeKLyRO%2BBnewjhOdjPV3HG%2FNmMg5Tdp2o9YG7yAHFv303Rw%2BnZrkgT0%2BvjeJQ96KiLTqhl3IZx6PPl1SH%2F1uP%2FFkCMzWw6yqNYOF1ah84wCoj7c9ZioLMJVFdY1RjjCJNCaa3bK5mirY2nyH9PB8UXzAu5FmybiPVn&X-Amz-Signature=d701d92b67e56c91d5eb0b38e261ca4d8efa7d52ac95cb693a6403d0145376aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
