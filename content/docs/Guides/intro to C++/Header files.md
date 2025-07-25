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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQPG2YVX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIA7WRTXm0juZopzkbNBNYpLIvlK11Fs%2B8lYTpfYjryHDAiBs%2FZRaK%2FtSPMnLO%2FUPgJkWQFwumEEppk9ekzoHdXdxTyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMze2UM2HFM291FA8HKtwDTMN7BKsDUtYBuNbFjd4hMBKP%2F9mIOsS2KbbxlpEdfb55GECSJMuhDa%2BQxx1YRA30DqddRtRGmukwRnGwS4mBkFUdGpcaX5%2BJ1vdG%2FFAQSapf0%2F94zbP3DIdl0h25X%2Bsw5%2Fe5LDiGWUSsEbAKFKV%2B6%2FRPaE43b7vGFzTWrrz37UltaVYavNouUh55wAx2H9F5bMrfvJBAXcOs1XBfoj6St%2FEgYuWzJ8Q4qJ1n68rI193xkVtvs9gzdvo673ChNHR%2BGTts0tvuFjJf5ibozE4MF4%2ByzmCzdEr1Ze3waTXpLrFz9sVo9pVNNM0ncUZBiDCjjyjFYSWyD8mNWnnLKxdOr%2Fpui0pDFyWEf4hcfUfcpsK7GBExxSg8DPtZz3ZDGU5RDqQdiZEyfQe8rqGJBVSEYI7Unh7yt5kLYE3%2B0HYG%2FLlLfGJtxrlEF0wUrigaIzTKzy7FKyFnAoLpv8cVX5k6dMw%2BuWU9hKrYNbEF4REfiPx7UYHS4SqYlkqkDXB4zPtNhrGbJ2swGmRkykE4wcg4FdFBU6cLAM1Hlqc6JmLDreqfmYvL3WpdYRle10JfU58li%2BrYEuO7%2BBoH2ka4HnHVd2qXOOBnwyK7QiXFU3ZTwPN7N0jZrHpUIGI9AZow5feLxAY6pgGjlk46%2BHb33Lvru1nLJ4If7TR7awS3rXiEFR%2BE1HpDi6%2FDL4%2B0Ee9ar%2BccIvDL8da%2BSkTfNN%2FdRqP2JgzyruOdS18ZJGbzwAqEtwIJYpD1kzuMnbvZHy%2BrBSv6nAeW%2FjRVZWf12fF8W6Xv6T4rp4rZRnyEd0a0fhu7zKwPcYTFYPiCPQn8PDooRXc2reF%2FtaaHNzc9zz%2Bv7WPsAa0gPoV2tbYKDVv8&X-Amz-Signature=12b035a840c1f74144c0bcbaf25448ccc2297f54711c9e948579faa4881d6d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
