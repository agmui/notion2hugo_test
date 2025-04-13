---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3Z4VCW%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDnjosPQJpMlQljH8dzDqyrX54G5deoo%2FTBxv2OvMJShAIgP9B18Tk58Q9VKf6LAytKPe81bBOPW%2BXlqnCssDhMIegqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHrNGMNWGmnAM0RzCrcA7afp%2B1JNiFbNjtCOHQhpr4os6%2FGgUKIRk1ZV0gBNSX9pjG5r33yybGD1gYnvt3dly6Ih8MxyEHg%2Bk940zoE8GaidiVB95uRL8%2BY25f%2B8jkIFYhuDt9%2Fec8GxT5oOc4wtwqXbnww1W1rMatR8Cg4HbBUhla6cjGriwsLBez8ftKq2qtzZc6JyopaW10bTAURtIhGvYAbPvOlKXlIcef09qMEGzrTJSgaS8zzIJ4PDnGclukHpHX7rjbBn%2BOyXf7uvd5LpMKAo%2Bp5NA5DwT8b6VTp11QmyTXPhn0T6j5iqqPvuTws9rElJd7G8Ob3qaZa%2BSab%2B4cW1VQMEFOu1kQP0PxPV%2FA0e%2BAMU98h3xuV0GnQW18hPai0wBAF9wnxtJ35UzrxB1xbLqY9rNR1CAUHieyaluk%2BoGtqLW7HogTJtKiAMgkJcXROovAqqSOebDZq8bbgvlfnq5Vm2xXV78DaB9nrQrbnCvi2wMDFtz0G%2F91Bl1UZDAITACG3G02YUWXuP%2BbBD25vMHXxFgz1N3pl5ciMC8%2F7dpBp3BrO%2F6X3Z5rLwxp%2BEbHu6aQ7UNLCej2y3xD45LCaP33oDsHh1djgDfpECOgv05IDDKCoiE%2B%2B9WPiTDp%2FpZkfOqolThp9MJG%2B7r8GOqUBgJXGdRci%2FipGFNRgXF6a69QEoBq2OH5dXZCONGBSgJX31BD7%2Bd0t0JGde1XIvEIbzF59PsrBJDitc9MtK%2FeVBVbz23BH3NOEjuFrcdzaCpH2VzB8y1Q6bnrsYKqJXSPv%2BBeodV5nZMKCj4u9H4HO6%2FOQsBTayINM3guPuyQ7n%2BiJMICaC0M4yY1CVDXG6teIBevF%2FTK3mVKaItVMEItsDqoNo9nN&X-Amz-Signature=c36901fe90ef6facab1d52902f0ccf40ed3b2648ff41c86ba0f668de1f325bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3Z4VCW%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDnjosPQJpMlQljH8dzDqyrX54G5deoo%2FTBxv2OvMJShAIgP9B18Tk58Q9VKf6LAytKPe81bBOPW%2BXlqnCssDhMIegqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHrNGMNWGmnAM0RzCrcA7afp%2B1JNiFbNjtCOHQhpr4os6%2FGgUKIRk1ZV0gBNSX9pjG5r33yybGD1gYnvt3dly6Ih8MxyEHg%2Bk940zoE8GaidiVB95uRL8%2BY25f%2B8jkIFYhuDt9%2Fec8GxT5oOc4wtwqXbnww1W1rMatR8Cg4HbBUhla6cjGriwsLBez8ftKq2qtzZc6JyopaW10bTAURtIhGvYAbPvOlKXlIcef09qMEGzrTJSgaS8zzIJ4PDnGclukHpHX7rjbBn%2BOyXf7uvd5LpMKAo%2Bp5NA5DwT8b6VTp11QmyTXPhn0T6j5iqqPvuTws9rElJd7G8Ob3qaZa%2BSab%2B4cW1VQMEFOu1kQP0PxPV%2FA0e%2BAMU98h3xuV0GnQW18hPai0wBAF9wnxtJ35UzrxB1xbLqY9rNR1CAUHieyaluk%2BoGtqLW7HogTJtKiAMgkJcXROovAqqSOebDZq8bbgvlfnq5Vm2xXV78DaB9nrQrbnCvi2wMDFtz0G%2F91Bl1UZDAITACG3G02YUWXuP%2BbBD25vMHXxFgz1N3pl5ciMC8%2F7dpBp3BrO%2F6X3Z5rLwxp%2BEbHu6aQ7UNLCej2y3xD45LCaP33oDsHh1djgDfpECOgv05IDDKCoiE%2B%2B9WPiTDp%2FpZkfOqolThp9MJG%2B7r8GOqUBgJXGdRci%2FipGFNRgXF6a69QEoBq2OH5dXZCONGBSgJX31BD7%2Bd0t0JGde1XIvEIbzF59PsrBJDitc9MtK%2FeVBVbz23BH3NOEjuFrcdzaCpH2VzB8y1Q6bnrsYKqJXSPv%2BBeodV5nZMKCj4u9H4HO6%2FOQsBTayINM3guPuyQ7n%2BiJMICaC0M4yY1CVDXG6teIBevF%2FTK3mVKaItVMEItsDqoNo9nN&X-Amz-Signature=1b7e67b961c6cf70e80ac05575240aedbf76602fccba97eb1449cb97a6e2eca6&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
