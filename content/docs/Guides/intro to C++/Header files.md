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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5CS4WB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaYBq1JN%2FQpCIDT8%2FF7PzJk2iaI3ATcPiFNH3s1vukSwIhAKIZCrTw7WPGKG3t8g4JDuCb0kodWKHSoRaUrrfftCWtKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyncvQf2rc%2F026bbrcq3AMne6SfAIGkgntt6kg6BlDuBnZX76WJYlmXywjdMLolX7mlY8HUTREGnCXUjFgFcT30XnB9YWiCgyQnBgZKGyFcwSc1bVtcr6GLh8%2BusUBgjaB5qlftAwnMuFSf97fa61qSl8trk%2FsBcnD7gjPZCghYssSDuoTFmJcpMtRZ4ywmNFPhMj%2FinK2QbkdIUjGw8MwiP1yEW5f6vsyF8DpDGyuIEyzrCBmIhgoL3PO%2BAwZp0AAukiGhbGoqopDgkNrLLqZ9gx%2BHckFSTu69vfSsYC88%2BLIKtaliasz4G3fGmRrSeIvEXzO2hfFQuR58k6LUVfhJEj%2BCaGGZHNEwAnuUPmDrlDSwxdlvFoBpTXS563jl1VTe3dDBQB8fIHcbWMP0hFJab6luhMWDMEGWODl8Zi8W7HWyfcWwpMy7HVujdC6A4AVSr55yf1OZADQWayxMH3uPqZnImVC%2FgJFUWR5yg8Sft44oeXwrcD9vOHNpnHe28%2Flu7LrffjXVWiVWHAM0u%2FuUZu%2F1cbsZXJWCdT0V25l1X3%2FK5zfoLMqkPS8N11D9%2FArG%2F61kKE%2BqHGyTBaINfqrqTM4nrX6RJ7ZRBxjNaM5EpmLj3xHBcojw2ZxGsFKTjx07Eub6kisD6%2BWapDDHspbCBjqkAagzNruu%2FFTOt4d7SHmqUtYPyEPxs3gkrTs0T7d1%2F%2BVerV2zGJwsndquZP%2ByT2E22BbWsRTXjSL%2FMXqWwbwNASHqkuw1%2FHkmO6DLkaY7AAbUamZBCVDa8LFMBaEOUttYi11rUbSA0bg2BPdGoGLDe2iBh6Rw%2B49gJJ4C78%2Bft662jeKVRnyHlMd7DVFx33QkcehPM0p8W4cKK2dYVzcnCE5TKPMA&X-Amz-Signature=b314e2bbf7774907ed27466f04c9c539635ae2e7a9e7767746067a237a7499d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
