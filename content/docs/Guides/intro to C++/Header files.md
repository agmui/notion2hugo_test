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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z26TDCRV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICGOsZ3V0esk7ZQxzbqlE6T9ipLkLL4SfqH9XP6B1U2IAiEAwZhIN3QN28HqNwviKNSdoCtPwUHg%2BolIlhLnTneQbVAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDMu0drqsyoFQkhjefCrcA3siAnliwMLF20%2FQ%2BEv34RT7y31Za2N%2Bz9V0VgWaUgJyi0AIXQKyqeMQ6OKn5UMa%2BO2eWLttzHJ1yjaXNcZuPxKQKeGv7DS6cO8NfER5F00R%2B%2B9TyFBRsZ00OBDlqkJJxdiCvBrS4%2B4GPAji82IhvaPO1uTEYgsBB6GTDRNwo9kUsnY9%2FnyjzaXaGoGTzfjnB1GNiW%2BMy27uW3sapyV%2F3U0gCPuZLHgV3bDAtuTIg9XuRVfLI%2FRooe%2FDSwMvsB0A3iSBKSzmnY%2BKm0GHws6uc71FdIxVL7L%2FZLtYc5%2F0DdTBqAnP6hSSO%2FOBNmVNuJkDtkOJFZcdIFYYEQosl328SWcaE305DJ0rZGj8UgPKHINoDB18JBGoScpTqxisIxtvSEtuKZyU3JIeg0egolcYiI4pcQ3Gc5PAkuH56Bk7raU9Xgg6%2FMAw46H0bV3F6J%2F3x4KbiT4sNzptFzzBFOjU2cE0rAX9005i%2Fkn3fbPkuYXsC7F56mZcE7dc%2B7osSUrycLl1Ne4uwl0AUY0Spe%2FysVLgoSe42fN87ES%2FFe21tr7gj6mO%2FxsHa6Efld1wUU7%2Bjp1UBjqBiJpwvKI3E20%2FJAfBnaGH8zLIiHpSYW9GDQkOpibESinqTZuKBzbDMLr%2Bxb0GOqUBkTVXg7IgHW21%2BVGI7mhTWdc8869yuCw9AxpqcNJNYUkQfCGCTcjKoM14e1VG8zLcBma9vKBhcVjiQ64NDXcVbOucA3eaeeETNSozoeW7jLxjjfvmmfuH5b0aOWuJ%2BL9MTT%2F6G2R7%2FaeCCtNZd%2F%2FlUdo3DrWOCWKq1ezmx5tYiTFMfj7wV6PAr2CU%2FGLOE%2BId5Xbz5stk0%2BkKzs%2FsRHSXv5dz6TMW&X-Amz-Signature=849e9d13df16ba7fadf0f81ee9fdc9e01e24d8c655176fc02bc5c472c5f79bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
