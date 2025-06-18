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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAY6P2HL%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDILOf5zEVhUcyfyfIt%2FQ1DYbmsdIsm%2BQanAWJ%2BHw3tuwIgD5AFUUImzuivFE60RjY2byIumcDw5jLljDymq%2BZMKBgqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGHYyxeAI4IKvz9PircA11pxVmdY3%2FoYLd7kKZZ5ZmV4GiI92Is9aor4JXk1nm0QrcjlPRftyI1kzLj5YC%2FC2dRK2AxlhKjT0mOXbeOijkOgMf7BWRxQSw0M2xWEW2ptGcy5et9iLczJjFw6qD%2FgvI0OKW4PPCiSwz0QQ5hSC01hPrel5LSvv00OX8td6Oz16si6kbKgVYBpQgANzCz4KyKjkacKXoPR4NqdcJesnEbIFTNXRESzpkNPMAsHQVRrQKIs%2BE3riP4Xl0r8cC81%2F5yHzDl6YXqI%2Bc5XZXczvrmj4F1FsUt09Oojpr8iylcUrPBldUMgeaS0p5C25u89Gi3RzbkGX70rR%2BBVbmFj29a5y7q%2FN4V5dlYeSiTqB%2F6VHZkhpne1huu%2Ft5%2FKiUC1swZolIHhOlm96uEQRzLTAUWHjNZGEBq68OtbCYDLT%2FSltoJGMMohstJFrofkLGSEDkYnj25WXC9B0uz7TKi8%2FxUGDJ%2B2Brydg3MnGLrMrFaBs3qZa8yNI8Ak0cpWVGsZSAmx4j%2FNOztX84dAFbRYgh2NHrbKvTgL%2BEhD22Z98XgwX2YfEwKbRYOivCv3ZkS4vzvf7XjW%2FotYux0%2FBPbygXHi510Xy8rE7wIQpS%2BGyg1WRVMPC%2B0Smg6fgKZMPK2ysIGOqUByOx5ClF9xTJIoeOxYzJ%2FZf49Ahek7RrC%2FjF1viwvGdUGNWtZbwcUecndJinh%2BIghQW7KXUgiAnrNpDO9rtdgLa5aBZoLiOuru9Vez0g9HiuqASU30K9mlOD6JpV8824JrmB8AnOUJqNMff7ja6CSJ%2F0Olr1n%2Fx3VLAqHNWJvqhWLNkmU%2FRKyRRg4lvmgCyL0v3iH8tFKbZL14eqZVhKl59SP33pn&X-Amz-Signature=f1bcd90117d2eb9b30c5831c0d3de58d597e53ee9989f48a174f1f7fe1877992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
