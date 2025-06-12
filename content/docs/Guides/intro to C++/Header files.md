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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC2KUTEV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGgZThJJa8oarMpCCXUtREekYtKAZYLH0oEcpZmRp60GAiEA5UwSrHGsSDQYs3fqsNWt3eJmu82R2UDhX57beCz%2BizUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1j6t9MnnRS61ApICrcA95wkNS3vQOtYLK9gkIRpapJQ6%2F6H3rWZFudTFsYaiOiPzU0bC4YNqdY7H7GApvhl070QTV8DWYXIlnmAweHDBVdL4rItEw6dMa81VeC0fWYhr0x1vbGBHTSEjXvojd%2FU5ryA6U9a7HvciNPnwk6QHugSIVWaac3tf9UYPZHrcrIhf0f6QFsaSSlh9Hy0%2Bgs%2BMK0stgSs9M8j0fauWtOmV1s6kKPjZ2elV5JHcqjPLqzV2%2FB1wx7HTquD00wOMmif0t3Wv5TFG5Dg5uNGMH9V1nent0ibvJCEhr3uB6Wa%2FQAjRF149hISeG8CiJuavVVQwMUWzdtwpRVWLQtmSZHQWl0aoPFCYK0kmlHCdRfOShLvAjgHCMzndeS5PF7doEjUqq6TJuU%2B8%2F7ucsAK%2Fi6Ch0%2FBx6QG1f37vOOH7%2Bm4nIAX0v60ruJpQ%2Fdw61LdknhM7pdiJXCqM6vozrzAopv7hfSoMTbNZdUHgsO1Gylv142Tb3NrfCkfGjfe2MlDMv%2F%2Bc9gO%2BpzALjU3OfAI7V0IXDQ%2FvcfxL2YDhM5rdBKDSnZ0nGewPxBPySvF0ntt7K%2BIS9WzIY%2B7eVK8R5wqz8vbzSbhiPLBvYW4fDt9mfLwbxesUscSbesa8tgnrmSMPqTqcIGOqUByh2LHe7ofUEaq6gd3zsvRtmUMxYe53CdbXiBlqHNeUVvNgmdxU9B9uggxA7lCB75nGnQ%2BcMFmTS%2F0at86r2ZDUzXh0zfSZC1ER26YKc6eg6AHU4%2F4aac7rJqsjUkpWO%2F29qkw%2BhnFq2iSxzzba3sm6Nq%2BGPGr30QL7s%2Fk6gXWOmg889Iw0WBLF7O4Bgg14kA7FBUFaIU6rWlZBUEpwYy%2BKG7ntRV&X-Amz-Signature=10a4ec905c990bd9de2ff4c9eb2eac4b797dccc1cc147e7a0165884067950bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
