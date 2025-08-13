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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRYRMMS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzLnMUFw3p9KGSu%2FRJxfUOq6o%2FsaUNvAeon%2BRA6CrXYAiEAmvHPNLsbiTdzQtgOb00vdqhUSr%2B4iJthtOx0hqXQPToq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEKADKpAMAg5EhPmqircA%2BfU0ta9m7n5RgiyVxdspPsEY9k9ALkm9H4FlGdvnemNMl0hLNgk6BuYaislfTMpmZgsVdTPW7nXaii2b6M17qZXwptJrpMvygiRCfgOqsslkr4Kupj6oOpdryLzdqt9i%2BbEF9zDk8k%2FQrGpjZ%2Fhx1S1mF7nuTJ45HvseET3Tov5BIdK3R0WANu%2Fufz5fY2a2zLfPMiYfH37D8YXF5B7zzQmMGICk8v9qXQKn%2B6ANxBNTKiDi9VfE3m%2FLuRcwrLhfjCZi51LX8te%2FUNkNTdCMlmu97Rd4PC9S3uPc0F2UaggNo%2FbwW%2FKimeC5iuIwUAhZ7YEnAC4FkmpaswT6IN0pVzhqzFE7q3ln2bgiZ6FRUhxJs3FtXBXy3y5Lmn0u5n2RhGysHmfXQo5ikNdEHkI59CXvXKG8494WltuvZAlPVNwrH%2FCkVex2sy1yxXsFpgw2OXNdH%2FGXI8QDEtya8e3n%2BRCuyvgXd%2BTtFeng2mnKwdBZRrwB%2BOyJvnTnge0HNudnBpkpQxJofu9rcWWVg7VU3sxzgWGnE%2BnTlweAPyDM10Aruo533WHKLOTF4npcWVnpkrPq4b1KTUNvDclELgNpQbZDuiO%2B3muaqv4tZR4lmW6UVLSs31pFEtW26MpMMOF8MQGOqUB%2FH5vyv6EUJdZ2UOtgpROfCMucuXF09KCYpw64oE%2BxofzJ3z29BJSgJpmS05q36yTk4iOdXzYEf0fQCd7jTJDRJiFJzfU5jdqcHdhoaYhZIsB%2BiT14abYJqIX43%2Bv7DyDr2Ipdmg%2FBfZb%2B1GzRrqah0P0nyMEXRDUcH7VB9oGYNRGwRX2BbVnzOVDR%2FoOmaTVY%2F5wv2FcUsRj00XNaATEihsM3UVR&X-Amz-Signature=9302d44ff08fb1b67bef5d6450bd22f61f097330ee947a3ed700c44267ce0f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRYRMMS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzLnMUFw3p9KGSu%2FRJxfUOq6o%2FsaUNvAeon%2BRA6CrXYAiEAmvHPNLsbiTdzQtgOb00vdqhUSr%2B4iJthtOx0hqXQPToq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEKADKpAMAg5EhPmqircA%2BfU0ta9m7n5RgiyVxdspPsEY9k9ALkm9H4FlGdvnemNMl0hLNgk6BuYaislfTMpmZgsVdTPW7nXaii2b6M17qZXwptJrpMvygiRCfgOqsslkr4Kupj6oOpdryLzdqt9i%2BbEF9zDk8k%2FQrGpjZ%2Fhx1S1mF7nuTJ45HvseET3Tov5BIdK3R0WANu%2Fufz5fY2a2zLfPMiYfH37D8YXF5B7zzQmMGICk8v9qXQKn%2B6ANxBNTKiDi9VfE3m%2FLuRcwrLhfjCZi51LX8te%2FUNkNTdCMlmu97Rd4PC9S3uPc0F2UaggNo%2FbwW%2FKimeC5iuIwUAhZ7YEnAC4FkmpaswT6IN0pVzhqzFE7q3ln2bgiZ6FRUhxJs3FtXBXy3y5Lmn0u5n2RhGysHmfXQo5ikNdEHkI59CXvXKG8494WltuvZAlPVNwrH%2FCkVex2sy1yxXsFpgw2OXNdH%2FGXI8QDEtya8e3n%2BRCuyvgXd%2BTtFeng2mnKwdBZRrwB%2BOyJvnTnge0HNudnBpkpQxJofu9rcWWVg7VU3sxzgWGnE%2BnTlweAPyDM10Aruo533WHKLOTF4npcWVnpkrPq4b1KTUNvDclELgNpQbZDuiO%2B3muaqv4tZR4lmW6UVLSs31pFEtW26MpMMOF8MQGOqUB%2FH5vyv6EUJdZ2UOtgpROfCMucuXF09KCYpw64oE%2BxofzJ3z29BJSgJpmS05q36yTk4iOdXzYEf0fQCd7jTJDRJiFJzfU5jdqcHdhoaYhZIsB%2BiT14abYJqIX43%2Bv7DyDr2Ipdmg%2FBfZb%2B1GzRrqah0P0nyMEXRDUcH7VB9oGYNRGwRX2BbVnzOVDR%2FoOmaTVY%2F5wv2FcUsRj00XNaATEihsM3UVR&X-Amz-Signature=bd81c66487212001d5cc35d3d13616916dc25f4deb75a2e9845bc1aa7a3cda7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
