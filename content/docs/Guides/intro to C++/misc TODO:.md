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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24AZD35%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHN7PlJtzgtZhpGbIZQ4OsepROf7C6WDQpYw2mJGcTuUAiEAlFxfzwmW24vdb94Jij3htp%2BJUAGkb3Kmu2Cfxn3pJSQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDJts4frnk27eHlVr5SrcA8dQGsH0FufoaslCyDZBpA0YnjClKKyo3Vd61jjLPMzFKlIdjBDpCBCKmUvnTuk8ik9DQlN3JHrNbYlCd6pJadHnhYzVbDGnGwSUyn6cqmyCJo%2F76aAWUIJNLHLNVctw9Nf2HvpDTUrk8wP9HNEZyQX6%2FbVc46TJr8JKyHRlh%2FnqcvKpEkfFwZjuY5MZEp92pcvZv5Dr0zHHjESMaWFwb7pW9NXeq8Y66UPKYFsZCQygbw%2FFVchjlqls9EAly91UV81oqZtD9dT%2F4POKbDzH5DNULx9feGxYTn1HVUcbJ%2BbUzXxBs2Os2gHmRbHaYVSczYeWNUvoQF9TTqTKKGAPbAelDVC9ZrH74cmkQG1Yretmkq%2F4x0fMXHKtWkDPd%2B4AIy8Txs%2BKKAyroKuiaiC0v%2FU4hQ4cTpPmTIDjZXE%2Fx5quYmcTCZApEh4iTgzGnkHTmI3sfyoUkcr9DgGbcUqPuGwHt5ST79ue%2Fz8%2BaL0h0G8VadgqmwfYKkdSQdh84LY13S%2FXZuPpy03D7ixj1vAVBioR4SHtp%2FcS%2ByEOtE1nnQWlthmsZ8s%2B9KmXi0eEO9SWypzvX0INAmECKqnRsJ%2FfOjDxHOFx5lxOfcQRVwAsgUXNKyiD9tUt7%2B6N83w%2FMPrOysEGOqUBp%2BLwGGRVqB9yDxL%2BcfpEJwNxrKJDo14NTXT8i6wsVjwonsS65WNSsqiMHWyTIV0fYfBOitEr5lhUY2L7csDnitHostSwiw4jwe4GYt6DVKC6P1mNOEP9IMm5ZPZatnq5kWV2US%2FmVu%2FBS3iAo4wAUaBGFJZWPIxMgAcCzm%2Bsn%2B3G3BJOWeKZbL1tpVUTv9KQeP5pLEuRxPeYPcmBGDvXDv5VUWLm&X-Amz-Signature=e081a27bda5d3834abd6e1d5e81c0606aa8cdd33f1f2b160406c376434b22b32&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R24AZD35%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIHN7PlJtzgtZhpGbIZQ4OsepROf7C6WDQpYw2mJGcTuUAiEAlFxfzwmW24vdb94Jij3htp%2BJUAGkb3Kmu2Cfxn3pJSQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDJts4frnk27eHlVr5SrcA8dQGsH0FufoaslCyDZBpA0YnjClKKyo3Vd61jjLPMzFKlIdjBDpCBCKmUvnTuk8ik9DQlN3JHrNbYlCd6pJadHnhYzVbDGnGwSUyn6cqmyCJo%2F76aAWUIJNLHLNVctw9Nf2HvpDTUrk8wP9HNEZyQX6%2FbVc46TJr8JKyHRlh%2FnqcvKpEkfFwZjuY5MZEp92pcvZv5Dr0zHHjESMaWFwb7pW9NXeq8Y66UPKYFsZCQygbw%2FFVchjlqls9EAly91UV81oqZtD9dT%2F4POKbDzH5DNULx9feGxYTn1HVUcbJ%2BbUzXxBs2Os2gHmRbHaYVSczYeWNUvoQF9TTqTKKGAPbAelDVC9ZrH74cmkQG1Yretmkq%2F4x0fMXHKtWkDPd%2B4AIy8Txs%2BKKAyroKuiaiC0v%2FU4hQ4cTpPmTIDjZXE%2Fx5quYmcTCZApEh4iTgzGnkHTmI3sfyoUkcr9DgGbcUqPuGwHt5ST79ue%2Fz8%2BaL0h0G8VadgqmwfYKkdSQdh84LY13S%2FXZuPpy03D7ixj1vAVBioR4SHtp%2FcS%2ByEOtE1nnQWlthmsZ8s%2B9KmXi0eEO9SWypzvX0INAmECKqnRsJ%2FfOjDxHOFx5lxOfcQRVwAsgUXNKyiD9tUt7%2B6N83w%2FMPrOysEGOqUBp%2BLwGGRVqB9yDxL%2BcfpEJwNxrKJDo14NTXT8i6wsVjwonsS65WNSsqiMHWyTIV0fYfBOitEr5lhUY2L7csDnitHostSwiw4jwe4GYt6DVKC6P1mNOEP9IMm5ZPZatnq5kWV2US%2FmVu%2FBS3iAo4wAUaBGFJZWPIxMgAcCzm%2Bsn%2B3G3BJOWeKZbL1tpVUTv9KQeP5pLEuRxPeYPcmBGDvXDv5VUWLm&X-Amz-Signature=2944352a554990ba373e6499a08501155090d774c11e3158edb686d54d93dc75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
