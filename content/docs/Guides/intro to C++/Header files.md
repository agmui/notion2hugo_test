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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OHNGYT4%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVp7732aSbXdZBUT5ubgUKW7kGUKPTvp4E3YN%2Bc7%2BGxAiEA2x%2B%2FDLEzipirL6I6pTglF1SrmFFnr%2FYgeakSG1hJ3OQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOcet5SQJKeYRmJuCrcA3hxjdpPjy4ZqF1eFTG6nyPmrtCiSi%2F1LHeRC%2FxT7wS6SDJKfKOE5GSIsms7yZLJq5pe%2BOk0Od%2Fkr8TjNEM%2BPh4TFsEaNmUd8SAfM9jIxc8PImbwNt34%2BWLVc0SbkdPX%2FaXUhkJO5vA%2BqLRlt1Qd2RI1fQxUya7tG6s6wqLfdgfEm7FAke6GnJC0DnBcgKqRvOXugDJEpukZOr5X%2B2IeGg8XdYstSQ4I0pcHy9LEzfybTK3xL5fR93f9xoq%2BUDL%2BACB9u6z57Y%2BGg9%2Be6jpAbadiXAkhsmNehiknhQYUfgCMn49eqQSZsy3dWJQ45UtWk7DIfZiH%2BN81%2BNi8WHPMNJ%2FONbsLcL3D9WQ7hSAxJCmLRk025FkfquWT5MPvtBcKNNMHL4CPaU8Muo%2B6%2FmWbVxJryNcLXZJgKdya4y%2BTnYWNNUWsibc3943IbpvWdhub7UgFI8CJnDxT6QkxltvWpTHpClS8y4DRWaq9FYGYfAAF7ZPzgBtSGCvwyfptAB3k7H9M%2FOdt3SEsPcvgsnjgZPVNwzcBxsFSXZSi591XGyOQ3EpwmTWjNgya8YSF7aaCpAWgnAno05WgBdujaN5sEsOH58rkRUJsp3tVmA%2F%2FcIL8tgxYEPTsF6JPGQ1VMJ%2Bzi8AGOqUB1BJCzWvABRsifQge%2FOmWiHvDmE%2BEiowTVxpCdaZ1eO2pfgMDfZ6Cs3HpyjXzczMpLip2Okj1Xa0cAxigQ%2FOrAfNgl2%2Bfa38QIQ%2BV4YdAbojo5ZWbWVKRskFmMBoaZzBI5markznJALt6klUp0tFS3Suu2TacUZHI6kPWVW8N0gkm7VSKgptQ0WPCTQinAm7faWBMVgxN%2BCy2ZOZkjjdGN4ngZD%2Fm&X-Amz-Signature=e131750f696b89261d7bbd716f4a6cbabb03299aa0dd12811fda286dd8dade07&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
