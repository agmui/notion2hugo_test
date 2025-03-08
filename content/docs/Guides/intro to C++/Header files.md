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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B756K3N%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEXcfXIqeD5sxTeam5biVoLAmu%2FA0aVnIygZZi09iShcAiEA0%2BzvZERCku%2BYPModTNDtw5fKG%2FDsupAMjLEhXZoOY20q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIgDk4dtK0pCCstEUircAxBAO%2BhZYC9LEx%2FuXW36VQ4i15z4j0sUMkWZmsW2fw7%2B0MbBMeryaBNg%2BbVLBMUIiqc5yUuxjm5IPjEkqidbuhrNQ14AsRJNZnxTfQekRpO7EBYiOTqsoq0fqU9AjNG3eZYmI4wN8PtwMxfiWgHUuJ58h4RCtKaWZcvXsKOz2bq%2BvQhra4%2FInN8bRoS7iuNxsitVEKI0ajZ9cwWicEEdJZfIOje2PwOD9QYbSZQSL47nzjobBM4dX3%2B3nD%2FSUu6%2BGtGN1qkI%2BbyZ3d%2F%2Fmf3V3pu7Ee5ttYryaVnDY0wot9OuGko06e7KvRjPPfxf4KcvSg5hFd0LMd%2FpsNakLS4D24cwaut6ILn6m7IXE8TFP5qEzBneOBU0GPwklUohUmjUqMcQ94nguI3ZUCH6i6zGyenZ6QdITCYOUFAG9kg8V9JjOqE0Z07u57GAO7lXodKfQbmVNNYOlYu7%2FzkXRGAveg7SNnQaChwxWHinmojMdf5tLvGGTm7sHBPTGkCDSibfl9aAflNbbuNzeMXq3G7nEoz7%2Fc%2BmM6iUl3I%2Fx3GmROH01XGwS2X%2F8bLh7CgfboDT%2Fa8pnAgYChKPhNbWq7bouvFM4Y6kxLjNr2DdEHUaCvy0xUVqbwsj2NmGZnB2MJ3fr74GOqUBEC1YTcJ%2Fx1fIqZFXXDrhzpou%2Brn%2B5542DkSHh7CFIYbbqxM%2FEV%2BpYzk6II7ZsW9raaMYu%2FWWXQfUXTSAAHI5RfK6j0QCkE1hTABafdCvkeQ5i3TwkPXo2QYV1J0HpG%2BK%2FMBc962f6F5qk9dUqT3imxgiVSAUSW0CgslxrFp%2BIeTw2aLBV0X6QePSYkHoZl%2BYr%2BgbWHyS6QyXTn1A%2Fy9XALrexDhb&X-Amz-Signature=31caff4230d3d352de8befb1c8466da8c1c0138629d112e8c3a60edd71431753&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
