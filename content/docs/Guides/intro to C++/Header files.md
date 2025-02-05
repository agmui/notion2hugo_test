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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U5YG6LR%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICXn9viOIw6z9Tk7QRQ1dvYUHzuJy2Fsgzdx5BRasTYpAiAqWHI%2BDGA7EHWJmr6EX59fxLuQ8bFnEFTs9EoY64eapSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMrakcOpYmHDAdOOznKtwDhpuxo12yBnpEx5qmG4%2BaM2xsRM%2B7nxQQovKZ3F8vpswqPdsGKlbhtW4G8lxYl7qR88x17iYlDcVrmZ3lpysXpqe%2FV14b%2B1lYUD0KUOBxAqAcF%2BCXYG5P9qFJW%2FGU7IrTjTGaPP06QXrgdtZ9d32iazh3kcjuom4J6FIQ5SA03CWOUjWC7hM8QPW8gvThG6GPfF2B25W2UZHHTyEDe%2B3tIJb1FKZ6KbLhIN3JN5SIFBOFkjBpd9TuOgkmfdqlliNPgRm9UHoLiMmDThweFYvqoEcU3BhbA9AbxKwY62YubEPpZy8DoPO%2F6Kfq%2FxFRYpmx09ZhO5%2FyywuMMszPNPFgcEYYcbP1ZzoAzVeSyxt7ICXxdZs%2B9mMPurlLhf5PWpnou0b2QX4%2FjJWIH6cWz6FiwkcEof6S63ufKtgprp1qA0ci5h0NilPI49BoChsqD3DfnwLz8SaR3ACJsG4mN3K4NIuaqfSZRWMvev7f7PUGovNJakaV9uuTdB7coshbg5lXHXfQk5PQ2yzw2fyLeF3v5f%2FNmALUoMgGqj2%2FY7KiAh2COAB5BiexUCEAIQcriCxbLcLuAwMN%2BP1guuf5p3ytbcwVxrpXTp4gz1DkVIYE0T2dLd1gq%2By4rV%2BDZ5gw156OvQY6pgFRKf3bQSLdWlDxytMq1FxahHdW8LRe8B6WV4j0oWwaQIeRASym58%2BzCNFrkMv3Q9WWPfnAPNxx4MTHNZGBafdbY%2FLGdNQiaQBqOROdwcmXLUEgQmUJI%2Fktpjcdl3Ru1z3OwMjEYDuYfxE%2FtW5huiUm7w1VgZeyqSVheJ0%2B%2BCVBoVfvFORBwdzwI55jLrzhJnCuBKYw3f%2FtMRe2Sx23kURboscOA3AJ&X-Amz-Signature=f8f441984e81b40b43432c899ced94a24a402c27852ff630673c6e8b584b5d05&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
