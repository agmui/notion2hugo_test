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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRI7WDBR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDNB97VDYn0FlTSXFb%2F%2FYqlOslIrru0601B9mQl868vIwIhAM6wjX4LXjkUqn5fa4TkRP8X1Nib1Jcat7neKDVUZ14EKv8DCFcQABoMNjM3NDIzMTgzODA1IgxmdTjTrFCTwOyaP14q3ANUct7BdJ9V%2F81gY1nhKCx1L9oYxY4yjKFtepcG4VUahSZH7PfJcCEbHPTSKOfSSlyrh4%2Bkuct9V7LKuX19YIRlEVAsNWYbh33lraUlydff0J2y6ZYbrEz%2F7fOcSY28uLZtiWHg5zFFxmTnfEyrrdQ8nhf3hu9BMvKEtT%2F1QKbNci7qb8iFhCKabZ3VUck23iDQUHVYpjoTpL0iUtCgqkNps6ZkGra%2BY5jK6zhzqCd0IBkvotl9iR8kdHvIDP%2BoqqQjnV5ptampCokXfki3ibe3fl8cmAoVbVwInaUsxC8agfQhNiLF%2Fw7a6olH4OQV6vXEtSDRE6ZBmeZJnHFr1SFwNg%2BWLr64XCLd%2Fx66QKhr9O%2BFJUbVQfeluZXA0oyhVaEyiLuMsormQpgue77N1WUUWmsuZUiNPy4dmPvFCFiwhXWt3qDK32UC8SHFJMQ81bFwmwXTNzwgK21BcbNDZpmAjyo1tv2cpk%2B1Fcx6i5Gw1ibvnK45smMYHSZQ%2Falqr03QqBUfSL%2BY8na8reqjnnvW5Z7IusSuGRVWX%2BtvVxQkr3Jy%2FUMDxOmMNnYuszhR%2FU%2BkG2LNPg%2FnI4iLAzK%2FVKltxAToP2oAkEmk0lWMFomTDyvA05vwqSF3CthN8jDgovvEBjqkAY97nFckUnwOPieJxjY9OHJR8I3ACksY%2FAFvPkxuxovLmIYznRvjCSpAVz56sxngfusu2TfE3JpSCxBjcEbYcTWp3nkSJHVfjVDcHyYxVWKEAizDCqfDdJSzgYpw41CEAZh%2BfuuYYFAqsTvnsItkOH2KEi2%2Ff4BRjArLUtFtPy2doEwVHo%2FGlrJK4MW4B9%2BR7YzuYyZA7zMaRyngQzfjEi6wMaKI&X-Amz-Signature=c8a3e9d6cb584613aa307b9e752c39cab85dcc75ba5942807e843622afa70a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
