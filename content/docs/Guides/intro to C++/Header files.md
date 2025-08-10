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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466674RHQOM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCBtL44FK9Sj1RVyx1TmCw6Q4PDjvtZ5V3C4ry1Ls3gQIhANFf0t8iysQ0oitZ7%2F4IZhr8wd%2FcHi%2FknowW6E1%2Foy2aKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF%2BZCO7EWVnXxI7gAq3AO2UIC%2F3fyUaDQO5l12qO%2Fc2ZMW3d%2FnOlsbWl1SmGiqkrbLFlrMsmAnAZIQy%2BXw23kiaD5%2BSuyRDmpayd8Z7EoxgYgjQOVMhl84XbpDR8hkhrAholJr%2B%2FGggq%2FjwaT0fLFLWCovwqVr8Rid6MM4GJSb8HGbXDtzWkG3iW2tWOtcqYJDTSCJohPkTFxDeJGPJybDkz2hQPPsC%2BBbzv5fJw79lQXIJ%2FonSgMiafWuosiZ90vXfnusuprWolUOhDVLAb81kZBiLnJrKcpjyzwrmKzY53SC%2FxoVhiAc%2FKzNpNLwVj4cTYZ1iKaaC2DS30euIr%2B9Njwor1UH2WMAN2iMCBa7AJVKm%2BI5WMdt6SnEO9XwlotfmH1%2B6%2FLvX2xkXU4N1gm55Zf9guU59S3VKaMMsa6drzdj7U5l17f1B53mLG7mhxvlT1kgaD2aRpJ02FFINv001V3jFwZY0QT2eIZJiLPDBDE7SwNJRRA9xsgn48mdu4VWDSr4%2Bkb0XtXcAK0BeQHYFx89gn4cOkBkOvDmZoRbyplshMEyFeUH3gadQyxLsBPZFC11xklPobXsjtHP4LPuNpGpMufiOBj6%2By0Gjwl%2B7n4QZMDBfH6bYNhSqp27K5AAg%2FSPTjWUhmVPLDCust%2FEBjqkAYasXa1SlgRUDU9ZCR8cVhwMG4Je1mmSrwv8df9I9MO4twKJ3hV2YNB1KXqkRcBdJOPPLstLB4JfOxUg9zxUXxJC1SHSlD9aaIdrJI%2FMj%2BYtDue7UIDb%2Fnaf96Ad0rRHJ9rQJ4QiAi3dTW1ywV%2Bv6Y6kUVjbv8z5tfo3JT4mbR3h5LXghSSH7fFBZKt%2B%2F0llyTdt5mcb8r994yl4UW9uyYeZa%2F%2Fz&X-Amz-Signature=2d6913b9961138dc07e4e6029ea9c07a27267fcc17e860b38e64dd527af9dbc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
