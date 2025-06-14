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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6E4FE7Y%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDBt%2BLt%2FvL6FFVIVMrNisf71UmXyFK8ew1oOZm0yjr%2FpQIhAI1vamranPQpfueeZ6ex05i056zMSKWyqNNYdmszEChLKv8DCDEQABoMNjM3NDIzMTgzODA1IgxDy9a36k9NhFy3veUq3APeEPlbekh1yA2zksdC6dqsJGuD885NAgHciPh93AVo%2FCDPygkGYBA%2FaRX%2FzS2KJmnSyCM8zLY1oc3CHM8u3yf0og5Xovzzig0Ia2krtbbw8uf0e9ZLRhGdXLsQGZCpiHN07xj4ETSoVMerTNmkZTOAKdGtnzOFSqUE02G79y01yLDqRXZMUb2wUaaAYSL25eQek7Oxw2EQzuXSJIRX%2FOStXnRvj7%2Bz%2F%2BlAQ42R32dfFxKxONqOlDq%2FmCNxtsUeg4rZjOnYzxuzey54r7c8OuijfoE3XOIan7GIapjSZdI945%2B6d0Bl44Pzv48dOgXVGlNrbAnayNIm%2FtBJPhBfB6eDUmkoGmBC09FsYtf7a2qq1IjHG%2BfQHfhap3WrwaFUBvirTL67Oo4k%2BqiZf5XNhMAfMDKX26OwupEP1M%2BBgsh5JEMhWEngVVqHBR54zZICJz%2BUnVmtMMtv9zVW8ohUpa96lAlPabs8zFHIaXkluRc%2BtSbpg8e29rL8U2qliWBzB6uPY9mpob9SHf5oLoLd85%2FjsG%2BcqJANmYz7X9lTlKnm%2FBvJnvr0O%2BHnU67Ak7%2F40QFNebICAasrrqBAQnN20ct0MZgr9KNnBqmsNSmvLLM4sb1Kbx4UesWaMF7VRTCXu7bCBjqkAb3guIGjpnD77FO5P%2B7rYPnSDOQDR6JyqLVXFaEe18WwEMv7nzBX7nHOjFhCLau1WBvz5xI3a9D%2F3RM309QORm9uTWBpB3RPaA58ev2NCZcfdHnDqKk02Lg96U6WkwZEv6QOcUIsvGl3aoIPOSyH8U01PQstb%2BhnIEq%2BFWKYv9H3bSOFayLjqLXn2jY3Udo6FS5lH7BH9u52v82QUbyhmUXDSyqi&X-Amz-Signature=1dc6d919af12ab1358f9babbc40d941280fb7ef16bf2bdbe80965fde04b67640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
