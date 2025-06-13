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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DCHL3GX%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD14qqVXBvvRJjfrO8WyinXRzRFkb7gIJMeYFt%2BnVgqeAIgbLChvDtx9LRoL3LU0Wgu8eHCUPDM5qHTNh05%2B6Gwt4cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDMPpYww%2BOEsghLsuuircAzA474LJ%2FgVMu2%2FqFX0THojum0YFduk3DRgN0bO6K2JyHteH%2BZEKDE%2FcMm9ghA9NhaKz7P2VpZ1IlRE3Rqs%2FoV%2FEYOVTcec3Zo0D4CnTZGuWdbjjhoWPPGVQaEkQONFJvlKsD4Xqgubpzes6kCz7y4GG8Ns88T6Dk332QT%2BCIcuBr2RgV9PTHSxteNdQf0c1UZJBl4Doi0KFgHEQFLAo%2BC1a7li%2F%2FyVRjeekpqfrHiPH0U4KR5I6CnjvCn7x6iNCyhaClpH%2BwmA0kIJHl2SP9WN%2BujBdLtOZMM60VG5dBFJ83wRXYV2gp%2BmoWGVp3Mjkd%2BbGx92snTbfrNzfAJkrsr33etukqQR4TXcll5Nz5IkWS1gBRzFH5%2F%2BBOk%2BiRFB2OFBDzPb6WzIYygNy8zyYzIZ4bxniZknhTJcS1%2BzrcJ5EUUMa541Phf0T%2BOlDo01hHOa2ux0g3YB2BKyutkrDqDkfA1s2A7X88cEZ6JWFqUeJnjHQAI6GOBrJreYmhGVv2oedVW34B6SMIz46fCDJOuaqbOTLH5VGhp7Y0lMPJkSlDl0XkLnx09htgwxFi4ygqdJffAqUDaFHycTBuTJTCiff7Y46HNW2q8shyKkxX%2BjybV%2BGTeIVhsnUbBEnMNf0r8IGOqUB4pArZfws9%2B3W55kO2yAgJEmkU%2Fg23XFsQ0eoXDuFObamNJDPzVFu92bUwTAvSUT3ZyZ9mCO%2F6tajVtZjWxRWaZDlg8sF27rd7P4l1Kbxsm7hYCwoPCu0dPhSzSO5l62zPfF6TtIol9umbttXSa7GCz%2BXmE8eSlF1TZpf69yfwpJ0CjZuXLMilQZO4%2F3dAEqeYmVsCJr1o4PomyJ7rr9T43QkURYA&X-Amz-Signature=7b36351868a5fcdebc6d58e6251e5a25495ac0525234b607407855de28df72d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DCHL3GX%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD14qqVXBvvRJjfrO8WyinXRzRFkb7gIJMeYFt%2BnVgqeAIgbLChvDtx9LRoL3LU0Wgu8eHCUPDM5qHTNh05%2B6Gwt4cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDMPpYww%2BOEsghLsuuircAzA474LJ%2FgVMu2%2FqFX0THojum0YFduk3DRgN0bO6K2JyHteH%2BZEKDE%2FcMm9ghA9NhaKz7P2VpZ1IlRE3Rqs%2FoV%2FEYOVTcec3Zo0D4CnTZGuWdbjjhoWPPGVQaEkQONFJvlKsD4Xqgubpzes6kCz7y4GG8Ns88T6Dk332QT%2BCIcuBr2RgV9PTHSxteNdQf0c1UZJBl4Doi0KFgHEQFLAo%2BC1a7li%2F%2FyVRjeekpqfrHiPH0U4KR5I6CnjvCn7x6iNCyhaClpH%2BwmA0kIJHl2SP9WN%2BujBdLtOZMM60VG5dBFJ83wRXYV2gp%2BmoWGVp3Mjkd%2BbGx92snTbfrNzfAJkrsr33etukqQR4TXcll5Nz5IkWS1gBRzFH5%2F%2BBOk%2BiRFB2OFBDzPb6WzIYygNy8zyYzIZ4bxniZknhTJcS1%2BzrcJ5EUUMa541Phf0T%2BOlDo01hHOa2ux0g3YB2BKyutkrDqDkfA1s2A7X88cEZ6JWFqUeJnjHQAI6GOBrJreYmhGVv2oedVW34B6SMIz46fCDJOuaqbOTLH5VGhp7Y0lMPJkSlDl0XkLnx09htgwxFi4ygqdJffAqUDaFHycTBuTJTCiff7Y46HNW2q8shyKkxX%2BjybV%2BGTeIVhsnUbBEnMNf0r8IGOqUB4pArZfws9%2B3W55kO2yAgJEmkU%2Fg23XFsQ0eoXDuFObamNJDPzVFu92bUwTAvSUT3ZyZ9mCO%2F6tajVtZjWxRWaZDlg8sF27rd7P4l1Kbxsm7hYCwoPCu0dPhSzSO5l62zPfF6TtIol9umbttXSa7GCz%2BXmE8eSlF1TZpf69yfwpJ0CjZuXLMilQZO4%2F3dAEqeYmVsCJr1o4PomyJ7rr9T43QkURYA&X-Amz-Signature=6e12c249087e5338741f5cbf0db06ba06aade2324717ecf1b9e6775290a37e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
