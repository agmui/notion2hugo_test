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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLW2V4BT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtsZsIgrSWvjUbOReX0tRoFk%2BQjEeYXxhrpr6iV4VkTgIgJ2FfJmAq2PRSPsOv7JWg8Ltt5Ez%2F0YEX2DnEvTi8B5UqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6nX6mCyRwdxTkv8CrcA0zTUO3GfXPsm3cRnLg0sQF%2F0NClyi48UU8polOUsKkdc2HNejTY%2BDWzoFzbYpsB80c9rF%2BCzYhFz8j%2BK%2FFucA6jcyUrEy7p3iisxVmklSRb%2BhLG1uo9VW5tKEvLWmdDf2ljbGVWDNqF3CT2IXNSAm3k4LihZQa611nIi4dVdEnwWjyDMb0g7%2Bwh0iSKAFR952avnCHMG0QLl1RuBKX2X5xYBQRXsLmHrCsTEzOXXVv6e9fWNPJJWIM9ZmQFJNrK8ol9AiwYR1DEYdVjmL0zjq7clIfoi4wHK%2Fy24UHxlswhr%2FnGM8EKo%2FDopEHRD9ELQe134GX4O%2FWoYvWSg4a0ubVTTpeVZ%2B682CLIdqyebv1zmynoYxAjCFeRoEm3Va27l%2F%2FYgkxUi833SYce2P3qxN%2BZplyZCg11e7%2BRJf3tHSQ4abaIbLmT3yGnnGI8n4H1hzOHcHOXG8gmO5RR%2BJa9c58JJSqqXRCFh%2BsbVN8budrdAjxqvtgh%2BzwTZwQNyhyBM7g7APAZvPcwkcRMhAcAHYJxeYgPdRR%2B%2BBfqjWTRx49%2FNWMccZeeP6NrmtHholr7zdtvmQj1faz4t3BLQ9NjRlV0geBjVGdNF638j30Ux0gXHzBFRDB%2FTRg4G8FSMJSKrb0GOqUBC55X7lZ99aR4s93ZpXRo6L50IGJeR7qhWscJrcsvWjhJtgUA695B95%2BHbRbK289jiQQV3QDQiZvpkDvt4FFPQIFMrcdjsyyu5%2FHA5EwVsnNtmlsC1oQDxcfChq5BVzbEtJAVKFxIFaCBfaNudks0aJRokegYBgfmtHY2tJCTjGEKztscmOE8BVc0ELb7HjxZ3g%2BlLUebAlxL4nwhmd8mCiJqrGG5&X-Amz-Signature=77938ea8aecc9ed21cfc986bc8ab639fba4142a8bd28b3465e8b80d06a47196f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
