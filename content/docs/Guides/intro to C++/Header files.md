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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662H5GG42%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHZ6ddgnNQ%2Bk5L3EIuUd3Od%2F3eR%2FulEvl8El7u9%2BI4nEAiAUCpI%2BOWoXiC%2Bw2CIa8LXRTG%2BUk0zrRKmuWkzhlpabxSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr2Lb2MNSeD9D%2B%2BnUKtwDObmVS3F5Uyz1eX%2Fe7dpXwGW61mYW%2Bx78i%2FV13nhtxB%2BYwj8NzAnMO423h7A03YLEH2PjOZz0yHHpj%2FKrdHisc4amTG8Fkaq5elFfldvF5V%2FslWgsNGShTwDYouxdc%2FjSaXp8AcfDUzzD2OJX3VZ6Kx%2FsnMUlyc9Gm4Dr7AydFdwZQJTtSayzWLiqfm6%2FHI8TTXRxpVFAaWZ3k294XhZWreI7jqzv7TNmxWjDQcDbb2Y43Zjzx9YfYnqh2T3Wt4MQ8a1NNe89Vpmzy2KLOTriTWj0VWugDzJddpBG%2Fhix%2BAOlWXkZf7gD6cBv0R5nC9siNSk76UHUYXK6vR1iBgpOxztgRxFzF9%2B3EoRhK%2BAF66IQiPkcUGi4bBDfox5nWVLXz9Vg6cpwArS6UhXusPAt56TLIYBR%2FtAaPAyaCy9HQs6qs9WHnhGulfcoGXesMjGegTkF01SjpP%2BIrAZrer1Ld3311nT%2FFcz%2FqD1RsGHhosrTb46%2F0PMCcCmUSepTBgG1JMat1JqjjH0OPnieYOicXiCjxin5ucyjiVlsPX%2B2GA17N9OtJPmsSCLNN%2FsSPJrXkl80LZKuwu0UZWPQBEZgDQUeoZ9GepgNwF%2Bzb55zYQi1w7p%2BWnc3IOj1Kz4wqc7BvgY6pgFU2wwuLTHULW2jDZdf8BDonWx2WX1GNH%2BVRAnN8c%2FEtkfXXsuX77MGL%2FbVvV%2FzhjAVMq9tAbdtXLY%2FvGPir7a7sQsPOnNPhqJ7by3kLUCmaBR6KPPv7WaH0RcTA%2FfLtv5do4fkJbF9Nphy85Xk8dEXIlQ5LYkCV0vYlJzJDZDyDrlJq%2FVpNyaU57Sx3EDLy639YEk7rsAYnNTZjzgzb2V2JBu5%2Bvlp&X-Amz-Signature=df3d471af91c3cccf49f54ad0c6cd70ec2ef5b4b7fe210ed94b861074a7e5a25&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
