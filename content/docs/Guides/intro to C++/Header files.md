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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTIIRPMN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQD1qCXpTaJJy9tHD417yuu8Tpsn0nIM0SP0EnOqyRbK8wIhAPL5azWW9IUSa5QHKE8RMMK8oSWIyFvaCHPaumNt33NNKv8DCDkQABoMNjM3NDIzMTgzODA1IgwiKPShwJHOoZgnrdcq3ANY3lFaL%2FEVVhmaHPV0T7u4Sd%2FbnWrYNHfIw%2BLHZj5WePb6xwoUepIMByujSHS1emmyC2LBe6LOb4scv6%2FUSodsW2tbIKCUb1Uyk6tUqRQTyuIYfWh3n5a%2FlZrgSCfB%2B33SJva2g4v0IArfEXlBsTcIdxeqxo0LAE7zewukNRL2J8DOpvJ1vyHtdg3lDXc7Db5jBxJlZP%2Bx7br7JDZUvj7GZlv8SDEkjzu4b8yBRFnp1VSovSS4FD%2Bzd6pCc1IoVfsRW4hxuuMDMxNhLuWTpSew%2BbwLe01BUB3LO2E5A04gaaQoCgZcMwmYSemW9OTMDY4sLL48b9ApLic0Ichmdn9VeVJBzbmOfTIhU4AH%2BJTwfmAPGSpRuG7rIm8chbtiu7wz2n2diO3uEMLopImpropj2%2BJRFm9q210D%2BFmFvjsaVY3ByFwF928nlppEUSGvHAthl9FAOwMc95Njc8Z7t42B%2FwqdH6c04AKikloKvbPZLy3s5ryuSXxRh7LBI7hCW9IHdMl85FfBaQNGJDRym%2BKP88J3xYbkgjH3FeVEUHrTEHefat6mzRJ2IPsipFKtyH%2Bna8cpIXv6jLoMKASWC2syyQ1fyMO3g5lIf3jHkIQPMshQUz6EODzNZxuH4zC3orjCBjqkAUG%2FUZYkBi6gfY9K8o5K16pPSj09ergzhPJOIvbIfWh3rS1gHYNBQM6%2F6yGIjfWTbqMmS2fY9mfYuhKRkHtYALhWVDnmJjSQVOCUXLRXhI%2BBgb%2BuAlOS2RF%2BVb%2F8WdLoUyU4pYL4dd5TREV9NYaZBBTqwWOBObkozRiia56h9CKPyGifbqCdy3teD7z1MNPerZMI%2B0P3TYvBjksmFmGgzFsT3M9R&X-Amz-Signature=c3c670e3a9f3ef1a014915b5497e57d1a0275130a28581e2ee3898b9a7cd501a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
