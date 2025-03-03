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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7SMJ4B2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsf3FyoNjDxEEz5vJy57VE4Vq9xG02wSmxOYsfpKuiKQIhALsW7Kdv%2Fkf%2FJFPLvbQAxlNetOJhyF7hMU3UNbk9ZCQjKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD95mlQ6oYPVoz61Mq3ANL%2FRqjy7%2F6O5pdh%2F6QC9lzt%2Biudbq3jSwamFVJqH1JcsJ5h%2F%2FUc8cVWTHTIQwa38nBaBafQqvyGBKyAkdUotn2jXY2LRx2aMc7lbAv2cKJaEkAxxw8%2BMkzMCETEEpUUJRWH%2BDMibJ4NOdoTPFTEbAf0FIfpee6HB33GkOcpo1Eu7BL%2BWipJIRBLC09cD%2Ft%2BRCo0Yy80IWfh0x8RLXVYZ50hF5yZ0GLVwiFEZQv0hN250nAoW4T%2BDppapih0KHzNYrGT5G2ZfJp7RP3gAgBO2x2ZCg5p0JTjXPdxpbT8rdWkswGHeMrvIheirczx5XmMwNNmmTAwCo6LoR%2F8mJKUd8ZG%2Fc0MkrfuwLi%2BeJrekGqR9Ms1lLmj5UJ1jXtSsF6bUJHjLSe2XMclJ4NcVpVAsA5EPD7C6PPEdRFTywBDrY3lezrru3hP0%2F6FFKkWAfZyTLf%2BhfFcFtKjK1p%2FR3gi%2F%2F5WLNj6yHE3YyeEZ5L43ep54F37UB2Gk6DiILqxkrmHFQyQnOLtpz5lp7gsJFktmDXSuY4qgo%2BlTO%2FvdVawisIxaJkxi6afHKP3Rf2Difj%2BlGkcCUiESgXxDscpyjfD4ab2D8vFdlFSXO6dKIFQAxNGWB8RKPaLD%2BTjeFhBjCw3Je%2BBjqkAQ7W1v6sYbGLoYHvdRSvWNkNf0FwTvDOhH2zlpQmsNKpOEpsNIzbxL3y71Cp%2FuuZYx87MV8cGUe2ZfFk8Gvs6uE7WzczZdCbAKy1ClZF7n98kysRjZa3G%2FVUh1EoJ%2FDWNmH3Ac7guXonMfeRa9sCpMsHgAwBZbHgSPSsqr7WPW2ZTeL9L%2B%2FhT5iz9pgcVbvb3dQBcwtvNotOn21afHVKM6tOdM%2BM&X-Amz-Signature=c5a50ec1101da33cdb668318375414bdd22e116e94f69e2a3a3766a6dec3cb22&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
