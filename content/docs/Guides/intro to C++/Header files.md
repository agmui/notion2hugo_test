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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NU3J4Y3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDin%2BYlpgQjm9bHxrA8s1iAKTtuEYz7tcU3JWqGpWSfRwIhAKZ%2B%2BEEOrGvqJ63329olFuYgEC0Fqs52wF2DRp3M5N0eKv8DCGYQABoMNjM3NDIzMTgzODA1IgyIjcYSpOT2IIKlaskq3AM5Bo%2FLnYIaRq5w4NEkuyqB1E%2Bj4q%2BnwbPhPOFqaLHrAExNWV%2F7kNkjerjazUCJyPYmv%2FnIObEqXck8Pb1HqtqaR5z%2B88JG9NzoIf5HbpvAlEmWj6ekaly5vHj87p%2B6ZFMhRY6Wi36%2Bpo5YGw08aSZ0yXYlh2RFyXmjr8InEud1UkEIp%2BSMooaJoGkXJXNl1CToCE3XIAyYhc%2FnqvsxWY6SeGnClsNcMRCO2c2rOS5FRMJil4MCJqNyZ2QHzrJgEvte8KDQz8B7ATk%2BgEewAZkQWdqyX5UDskr4RPcYnRxf9B6KMQug5qEFKO08siQTt71ySLhSK3nuc8ejT0GQ43FkZkJM%2F6H%2FMdvwCK50wq5Jjzf0Pyz25J%2BmejPYEFuXbmo36AX87ZkwxGK0Lw9%2F6%2FKeFk8efaS39nfdDUV6%2BDWol5SDGfsr4MhAjq9JPBOkR8RiZnA9CMO0uLQprK8PKRlSM3b8P0RfYA38NIg2SN1EroBCTtWuPces%2BcLOH%2Fc2M8JmHXnVu%2FKRQNWn467tTdExc%2Fx1LU0k3ODr%2FeDjbBncUk%2FDlQr58RVpFghSc%2BKx9LdcEW6Tpcmmv8i%2Bng9JHtIoFSLSi7ZH4wLcvK4Maf69uavcvcyw2fnXNGptNzDagP69BjqkAZCa0yuFsFCIK6BZdWveQtS3QwQHIt8LxeoeXwcinfU2MwVBfHaI1z65g2XmUw8uxo81vN5aVp8T3GfbdrpBzu%2BP4gld%2Bv9Kg%2BrboixjzaUCzTiHxFVnuB7aE5bGf4X5CwUHJJqxqjZpN%2FF6%2FwPn12KkKkJ3J%2FRN1BO0neST1LuaRPgfXi3A9mlLOu2QLvOumktrpIn4O5%2BUXne8yVSclg4pJbBH&X-Amz-Signature=b306a04255641fee5e7fb231a8727087c65e56bdbf04af23191063ee16d37f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
