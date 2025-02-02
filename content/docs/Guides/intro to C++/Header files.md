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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GANCRKP%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrYYNZ7EmNiLI41iq25LpRnk122oAjJJKXGKmAKa8EsAiBmV3R4JxH%2FOkoOlT1mQg%2FajWve9R1AsmOqWCaRmQABfiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BJYh9bUydlg24LohKtwDnTlXVY71s1TsWm7j5Z3S1b5C%2BvRaE6rFjOqF695LENVHZwMZy8RgFhT9e2we%2BIDpFCL7ucj3hH0eAyQv8kflofQKD%2B8RirqeCQ2scB3%2Fz0VNWMOEQFK5PESIc658eoaB34ZGMdWkO4N480pFspBJATIXRSS2uKSKZUTfL7UaYGqPHGg5nFFrO0Vsg5GmjaSZOJTr427JkhAGHS3iWHXzRFdiW4CL1jX15OGkEY3BRE%2FWsIdqxfKekXYuN8Hne5wIKGGTNwpAAM0XXUGnU%2FAyv%2FYJM6KV8sXnXrKr0UoeHxpze26%2BYsQx3tq4%2B4bifAWXgiGyzEezJJg8P%2FkzFzZ6nEg8qH3KppLwyCD8tfOF1TG4pNgLhmkeBs1yFk16ru8qSpNvWu3odWIpOH2ubkUOFhNQBy9SqMT6%2BBI%2BNupFxQrktnoN%2FXhYDYYyZuOfWZiLRSrtugPKzDvLMei6iE2Y4V1x9FxEDEdKxJmo2Ca7DGiCPMpDMLawFlC9x7bENYqCw9NPc8syc2QAYc%2Fp2HIp615Ec%2FH8DaEVV0QuktH9O9oxbTscEucLXV8174pe61oOrcNYnTWnshypAx%2BorSute86B0zP1mt6AlEe%2BvUd7dPLr7nWUqVkcnSd5fMUwnp38vAY6pgEPi3qaQ4Hh2m2odQIwujgt%2FbWQE7%2BVhVBILNLEBfH5QjJxFWfU1qBh0UV037%2FfAJdJtSlN8PCqr1nSTQSrIS%2BxbsWLyEtMfVKFBMJIa49HTbrb48aWgWLKqI%2BB8vDQHun5LW1SuU1o%2F%2BLsT8OPwLnrnZqro7hg5FgDqLPmOvJgNjoBIGqfpjlmiz8Y8%2F0bWZ1x6%2FFenLDD7YS3DYH1xxgISTkKmh4B&X-Amz-Signature=c6995b85d8b7549f3afe6803451b47c45204ee5ee550d7be9538cc1f3e6327a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
