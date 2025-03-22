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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSZDUFFS%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICttuj1l1MPJhibKXtB3SiIY8PNwqq74bLUvb%2FZdMWHUAiAiTV6%2FneDSh7Cc6L5iN2DGmp2lczLbMtS8NBqO4OpKqCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV1XVX%2F%2BD7nHbxepeKtwDjFc0XVreO5LHS0YfrNodRgVEYl%2Fa6tRWNn0c4r19wkfNourGC2DkVXOwrsbkEpwNIigdEoFDaY2wNMGR%2FAM55C815aVEzfrd3jimXbdVP6cc8WlJsDFNQN9nkHtNMMBJLw9trhFuP1BObTjLkKCCGixHIegzMHk9OgzYZTdYnomv4HhM9mky6j3U2t7UR%2FwDhk7IC8U00e9BFOjFqGO7csl77LDQp7RFqVljkpF7LFI1RGaCkIpToMI666PQpLQ370FiI7fmLhtHLCSN7b5Y%2BI7FgSjsn4ZDhV2I6ST%2Bhr04lcqtDw0GY2hdEFxi0ej2bMnI2B0%2B%2B1MylQwHCea2RmCWykJtMf1fnZhjSfCivCDhqgJGMza7FIWV9JhOtMfE3HpiNvqfT00W5Xc5j5FgIh%2BNd%2BxoISoY7zdaWf%2BbMt9XKMJyHC0csVzr8IsRXCXyQ0ak2gjZ9r77V0cT8dCxkWPhslnw7l%2BzqJuyzjQ5TRXZGrXPZLhkkWA97KZIVwNI1Y8aWd2Od8ufLquaRjIxTh7U8Z8fQZVPpOWIZ5nAv4p82h%2BoSyGueoAf760NmOkktmSb%2B3qua5K4LZnX0u85vnvwMP4PpX9MgwQXTU0JQD3Ku8F2xFYfb8G4x5Mwpvf3vgY6pgEpPAQNSDuaW9vtp0krDRib8HR5U9W0zI3Oz%2BPBF0s4xsrvCNYJcre%2FFaEqgYoHC0Xe7QH6wJJY6OI8r%2BiXptAnmeCaSq9zRLthf3bdY9QCoHHJkM%2Bdlo1knRkKlcTmq2bAQ4GGV57y9GfZiN3nYQLV4tqF62C3ZOsilpNq4C4gu5psXOekmW6O7QPoLXSp7ZtTa5VZl4tFXmcRIqEpTQ3uB3clmD%2FV&X-Amz-Signature=67cc679a90a4799aa0017ed30352fd2490b91169bbc4ad1a3c93b0d03412418a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
