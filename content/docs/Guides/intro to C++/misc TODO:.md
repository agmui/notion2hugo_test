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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHME2L5L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIG%2FpG28Fl15Ik2QXjlcqdnTKWe2t5DMvMmz0HbKCMbbtAiEAppmRFw17F5us94C%2BqlDNTPjqjsxWXw93P%2BHOaMyB%2FRsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMKu5r%2F%2BJhkWhmdG1yrcA2cfIt6nRtwI319LU3%2BV6%2BJESnnwV5f0FO45N6SLnxCqaUsTaH5LZFDZ7auAII44dp%2FOAa4eovlmEeY4d7T9pHEcF0MY9ha%2FFj5yUXwspyp3ZAmOiFlN%2F60vUx7eqEi4yXm3mGBvWYrJId0IaESNnKdv0Vlcv1nan4nSqx4AIz74DEDPb8eMARUPPXxRzfVQAEuod%2F%2FVJx3TgGjMSBe97FPhbmpH3L6Sq2Kt%2Fm5m3g1IaOWM6xMYoYxlQQYmuGbzuxvoA3duM7uOQX%2BQjz5Oh1GtRp4adU%2B6dGZ5W6uW%2Br8Vej%2FrSRVP0fZnYW7hhylaKpNEgzT0YEidKXH0os8XZut%2Bo8npPs1c6qcEpQLsSI6HcDih%2FouxP2AA9CiJT2Avc3c9kWhirILFkBR2huOptrfGPOM43MtKkpjVzsU76NtdEU0QsSKlnlVEGrRWPI%2BlpMzowiukdnFjE4qbSD4ansW49Sn2lnUmfrjimLxP7YnLneR0hqjZ51cCAOME2lulEsUtwkjkbuhWSqPTgMsriTKoemuRLZMy2VSvsVRLWHfH3jGf%2BcJDKhfibMy0PVVOVoIzTglDD3K7KHjpkNHGkEW4SN01SOzVR18strhdZQvr6zf0ZSJAjat6YcxOMPbC%2BMQGOqUBq3qSOvMFed%2Ff3nugnBrvTu8IEWP2SGKmZ0rgGFRvWEhl6teFvedsg50O6rUUq%2FVq%2FlzEkiUlQorAuxsuHwKoqDUSzo7vvN3o9PpBuAVsMzPSn45eWnaV4mizCCPQqdpE7N9RolVvMHrbz%2Bs1p65zOAqV1sYb0e%2FdQMwVRoeJGevFQL5qWG3sX2CLSXpkFmfA7narIhCT4K1JZmmVUJyS8%2F95fMxt&X-Amz-Signature=be8a31a4b76eb1cfff2b51f4e1ea4f856d043e0592088ff5d1e0cde0013ac550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHME2L5L%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIG%2FpG28Fl15Ik2QXjlcqdnTKWe2t5DMvMmz0HbKCMbbtAiEAppmRFw17F5us94C%2BqlDNTPjqjsxWXw93P%2BHOaMyB%2FRsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMKu5r%2F%2BJhkWhmdG1yrcA2cfIt6nRtwI319LU3%2BV6%2BJESnnwV5f0FO45N6SLnxCqaUsTaH5LZFDZ7auAII44dp%2FOAa4eovlmEeY4d7T9pHEcF0MY9ha%2FFj5yUXwspyp3ZAmOiFlN%2F60vUx7eqEi4yXm3mGBvWYrJId0IaESNnKdv0Vlcv1nan4nSqx4AIz74DEDPb8eMARUPPXxRzfVQAEuod%2F%2FVJx3TgGjMSBe97FPhbmpH3L6Sq2Kt%2Fm5m3g1IaOWM6xMYoYxlQQYmuGbzuxvoA3duM7uOQX%2BQjz5Oh1GtRp4adU%2B6dGZ5W6uW%2Br8Vej%2FrSRVP0fZnYW7hhylaKpNEgzT0YEidKXH0os8XZut%2Bo8npPs1c6qcEpQLsSI6HcDih%2FouxP2AA9CiJT2Avc3c9kWhirILFkBR2huOptrfGPOM43MtKkpjVzsU76NtdEU0QsSKlnlVEGrRWPI%2BlpMzowiukdnFjE4qbSD4ansW49Sn2lnUmfrjimLxP7YnLneR0hqjZ51cCAOME2lulEsUtwkjkbuhWSqPTgMsriTKoemuRLZMy2VSvsVRLWHfH3jGf%2BcJDKhfibMy0PVVOVoIzTglDD3K7KHjpkNHGkEW4SN01SOzVR18strhdZQvr6zf0ZSJAjat6YcxOMPbC%2BMQGOqUBq3qSOvMFed%2Ff3nugnBrvTu8IEWP2SGKmZ0rgGFRvWEhl6teFvedsg50O6rUUq%2FVq%2FlzEkiUlQorAuxsuHwKoqDUSzo7vvN3o9PpBuAVsMzPSn45eWnaV4mizCCPQqdpE7N9RolVvMHrbz%2Bs1p65zOAqV1sYb0e%2FdQMwVRoeJGevFQL5qWG3sX2CLSXpkFmfA7narIhCT4K1JZmmVUJyS8%2F95fMxt&X-Amz-Signature=74717973d54e56d11d716bac7b429fb2298e4e59cb4c5929de73f45006537c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
