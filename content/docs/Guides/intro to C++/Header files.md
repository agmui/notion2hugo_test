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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KOAEAY2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGZ8MOzoIlh6sYYSP%2BTIyh45UtYN25Te%2FApIL9AK0aUbAiBOoBvrps4gHet3NOlnm0IvAnFqeXJ1BGVEel3zjNXb7yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMjn4uivyHKOSu4JMsKtwDdiKamPtIdexnnuoGFcmYglchhj4pgRLdSdfh4IC%2FyD5i9nCr0f76oseAElAibS2cp5h4RuJSZYHt5ofgDDFRbbGB2Im%2FYCMD%2B6Z3vRHiM1K903PAMJ6inPlCjOA6RcxaP%2BHEWxzvhZEj5uiGcToFSifcgrVDroD2rG4twXSV891l7BSYUGCzJ1kmnFgDFcNwW9IVwu8%2BU7wNDwRWftJb5hgS9rF0hKPuKey2cktDtST16UFPTIj1ZPCQdqmDsdvlCq0NJ%2FgUeLg0%2FkCvA3zC0DxWpPoYYhbQasdZBbsMG3dd%2Bra%2BXZu%2FZEnZt9JFSqc0qUM1izOCK37RJSo7CUoCcU4cykVokAhHrZ79p1UdOAlOWZzODbYvLamLZ%2Bp959TT%2Bpdk7BE4rSa0ScDWsebSWGjr7u%2FQp2pbayF%2B4tgyQSRSf%2FwyBZRGobBRftei2VV%2BskJ6TY0tQm0lqCrNV894CXakMkRwSuAWFNrjTZqBvoK86o175dqbEgCOi5hF6KCg4tGVKHHY8clf6S4CmJSRxu1EqrUPyN93%2F%2FM0Tab7bRVNEVWePDzHC7hxm8aK2J0myH9DKjsz3EqZCt6IWCrGvgrJKAzktEah6mAfhWkvThwlwKPHayfQ1apUMrAwx96WvQY6pgETtOSby%2F07oeIfpbfuXsDZQEMSYL0ou3MpRsKBpZ%2BU29E8PxderP%2F60zksoUis2rm4DTKHTMyKyV2OFQu0LXF%2F5Lsqcdh%2Fxlbm%2BPSRwVP4qtQhkNEWwmRSbAXUNDuT5fQc%2FBKtJWP95C6dctd3ztVt3WuIRedXc2RA3T647d2vdI1ourmg3ZclyaJvFmew1g6Th4un7iHRMZSYBORQF%2BCaJl8V090s&X-Amz-Signature=eb8fd8e70a518026c59333942c87e0d31d6535eb9db32752177004691709248d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
